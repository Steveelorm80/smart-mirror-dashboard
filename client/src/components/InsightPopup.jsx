// import { useEffect, useState } from "react";

// const InsightPopup = ({ insight, show }) => {
//   const [showInsight, setShowInsight] = useState(false);

//   useEffect(() => {
//      if (!show || !insight) return null;
//     const showTimer = setTimeout(() => setShowInsight(true), 3000);
//     const hideTimer = setTimeout(() => setShowInsight(false), 11000);

//     return () => {
//       clearTimeout(showTimer);
//       clearTimeout(hideTimer);
//     };
//   }, [insight]);

//   if (!showInsight) return null;

//   return (
//     <div className="floating-insight">
//       <div className="insight-card">
//         <div className="insight-title">AI Briefing</div>
//         <div className="insight-text">
//           {insight
//             .split(". ")
//             .filter((sentence) => sentence.trim() !== "")
//             .map((sentence, index) => (
//               <p key={index}>
//                 • {sentence.replace(/\.$/, "")}.
//               </p>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsightPopup;

const InsightPopup = ({ insight, show }) => {

  if (!show || !insight) return null;

  return (
    <div className="floating-insight">
      <div className="insight-card">

        <div className="insight-title">AI Briefing</div>

        <div className="insight-text">
          {insight
            .split(". ")
            .filter((sentence) => sentence.trim() !== "")
            .map((sentence, index) => (
              <p key={index}>
                • {sentence.replace(/\.$/, "")}.
              </p>
            ))}
        </div>

      </div>
    </div>
  );
};

export default InsightPopup;