// 감정 이모지를 반환합니다.
// 실제 프로젝트에서는 이미지 경로를 반환하면 됩니다.
const emotionEmojiMap: { [key: number]: string } = {
  1: "😁",
  2: "😊",
  3: "😐",
  4: "😢",
  5: "😭",
};

const getEmotionImage = (emotionId: number): string => {
  return emotionEmojiMap[emotionId] ?? "😐";
};

export default getEmotionImage;
