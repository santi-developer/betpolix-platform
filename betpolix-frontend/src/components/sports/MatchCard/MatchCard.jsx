import './MatchCard.css'; 


const MatchCard = ({ localTeam, visitorTeam, date , result}) => {
  return (
    <div className="match-card">
      <div className="teams">
        <span className="team">{localTeam}</span>
        <span className="vs">vs</span>
        <span className="team">{visitorTeam}</span>
      </div>
      {date && <div className="date">{date}</div>}
      <span> {result}</span>
    </div>
  );
};

export default MatchCard;
