import "./EmotionItem.css";

type EmotionItemProps = {
  emotionId: number;
  emotionName: string;
  emotionEmoji: string;
  isSelected: boolean;
  onClick: (emotionId: number) => void;
};

const EmotionItem = ({
  emotionId,
  emotionName,
  emotionEmoji,
  isSelected,
  onClick,
}: EmotionItemProps) => {
  return (
    <div
      onClick={() => onClick(emotionId)}
      className={`EmotionItem EmotionItem_${isSelected ? "on" : "off"} EmotionItem_${emotionId}`}
    >
      <div className="emotion_emoji">{emotionEmoji}</div>
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
