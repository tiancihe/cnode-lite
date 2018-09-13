export default function getTabName(tab) {
  switch (tab) {
    case "good":
      return "精华";
    case "share":
      return "分享";
    case "ask":
      return "问答";
    case "all":
    default:
      return "全部";
  }
}
