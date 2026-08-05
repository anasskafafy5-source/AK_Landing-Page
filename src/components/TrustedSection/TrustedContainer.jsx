import { trustedContent } from "../../../data/trusted-by";
import TrustedIntro from "./TrustedIntro";
import TrustedMarquee from "./TrustedMarquee";
import TrustedSpotlight from "./TrustedSpotlight";

export default function TrustedContainer() {
  return (
    <TrustedSpotlight>
      <TrustedIntro content={trustedContent} />

      <TrustedMarquee />
    </TrustedSpotlight>
  );
}
