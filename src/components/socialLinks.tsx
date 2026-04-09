import type { CSSProperties, ReactElement } from "react";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  railClassName: string;
  railStyle?: CSSProperties;
  renderIcon: (className: string) => ReactElement;
};

function WhatsAppIcon(className: string) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon(className: string) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 8.25V6.9c0-.93.19-1.4 1.53-1.4H17V2.26C16.05 2.15 15.09 2.09 14.14 2.1c-2.82 0-4.76 1.72-4.76 4.89v1.26H6.75v3.84h2.63V21.9h4.12v-9.81h3.1l.41-3.84H13.5Z" />
    </svg>
  );
}

function InstagramIcon(className: string) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7.75 3.25h8.5a4.5 4.5 0 0 1 4.5 4.5v8.5a4.5 4.5 0 0 1-4.5 4.5h-8.5a4.5 4.5 0 0 1-4.5-4.5v-8.5a4.5 4.5 0 0 1 4.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 8.15A3.85 3.85 0 1 1 8.15 12 3.85 3.85 0 0 1 12 8.15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon(className: string) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.58 7.19a2.97 2.97 0 0 0-2.09-2.1C17.64 4.6 12 4.6 12 4.6s-5.64 0-7.49.49a2.97 2.97 0 0 0-2.09 2.1A30.7 30.7 0 0 0 2 12a30.7 30.7 0 0 0 .42 4.81 2.97 2.97 0 0 0 2.09 2.1c1.85.49 7.49.49 7.49.49s5.64 0 7.49-.49a2.97 2.97 0 0 0 2.09-2.1A30.7 30.7 0 0 0 22 12a30.7 30.7 0 0 0-.42-4.81ZM10.2 15.23V8.77L15.77 12Z" />
    </svg>
  );
}

function LocationIcon(className: string) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s6-5.23 6-11a6 6 0 1 0-12 0c0 5.77 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}

export const socialLinks: SocialLink[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919876543210?text=Hi%20Glamrootz!%20I'd%20like%20to%20book%20an%20appointment.",
    railClassName: "bg-[#25D366]",
    renderIcon: WhatsAppIcon,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/glamrootz.signature",
    railClassName: "bg-[#1877F2]",
    renderIcon: FacebookIcon,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/glamrootz.signature",
    railClassName: "",
    railStyle: {
      background:
        "linear-gradient(180deg, #f58529 0%, #dd2a7b 52%, #8134af 100%)",
    },
    renderIcon: InstagramIcon,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@glamrootzsignature",
    railClassName: "bg-[#FF0000]",
    renderIcon: YouTubeIcon,
  },
  {
    id: "location",
    label: "Location",
    href: "https://www.google.com/maps/search/?api=1&query=123+Luxury+Lane+Fashion+District+Mumbai+400001",
    railClassName: "bg-[#8BC34A]",
    renderIcon: LocationIcon,
  },
];

export const headerSocialLinks = socialLinks.filter(
  (link) => link.id !== "location"
);
