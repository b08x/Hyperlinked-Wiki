/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface HistoryPanelProps {
  history: string[];
  currentTopic: string;
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
  onItemClick: (topic: string) => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({
  history,
  currentTopic,
  isOpen,
  onClose,
  onClear,
  onItemClick,
}) => {
  return (
    <aside className={`history-panel ${isOpen ? 'open' : ''}`} aria-labelledby="history-heading" aria-hidden={!isOpen}>
      <div className="history-header">
        <h2 id="history-heading">History</h2>
        <button onClick={onClose} aria-label="Close history panel" className="close-button">&times;</button>
      </div>
      {history.length > 0 ? (
        <>
          <ul className="history-list">
            {history.map((topic, index) => (
              <li key={`${topic}-${index}`}>
                <button
                  onClick={() => onItemClick(topic)}
                  className={`history-item ${topic.toLowerCase() === currentTopic.toLowerCase() ? 'active' : ''}`}
                  aria-current={topic.toLowerCase() === currentTopic.toLowerCase() ? 'page' : undefined}
                >
                  {topic}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={onClear} className="clear-history-button">
            Clear History
          </button>
        </>
      ) : (
        <p className="empty-history-message">No history yet.</p>
      )}
    </aside>
  );
};

export default HistoryPanel;
