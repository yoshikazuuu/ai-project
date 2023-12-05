import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MemberCardProps {
  avatarSrc: string;
  avatarFallback: string;
  name: string;
  description: string;
  quote: string;
}

export default function MemberCard({
  avatarSrc,
  avatarFallback,
  name,
  description,
  quote,
}: MemberCardProps) {
  return (
    <div className="flex flex-row items-center gap-4 align-middle">
      <Avatar className="h-24 w-24 text-4xl font-extrabold">
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>

        <p className="mt-2 italic text-muted-foreground">"{quote}"</p>
      </div>
    </div>
  );
}
