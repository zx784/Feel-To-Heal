import { assetPath } from "../../utils/assetPath";

export default function LogoMark({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "h-12 w-12 rounded-2xl",
    md: "h-24 w-24 rounded-[2rem]",
  };

  return (
    <div className={`logo-aura ${sizeMap[size]} ${className}`}>
      <img
        src={assetPath("/assets/logo/feel-to-heal-logo.jpeg")}
        alt="Feel To Heal AIU logo"
        className="h-full w-full rounded-inherit object-cover"
      />
    </div>
  );
}
