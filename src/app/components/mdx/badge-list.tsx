import { WiggleWrapper } from "~/app/components/wiggle-wrapper";
import { Badge } from "~/app/components/ui/badge";

const BadgeList: React.FC<{ badges: string[] }> = ({ badges }) => {
  return (
    <ul className="not-prose flex flex-row flex-wrap gap-x-2 gap-y-1">
      {badges.map((badge) => (
        <li key={badge} className="inline">
          <WiggleWrapper>
            <Badge>{badge}</Badge>
          </WiggleWrapper>
        </li>
      ))}
    </ul>
  );
};
export { BadgeList };
