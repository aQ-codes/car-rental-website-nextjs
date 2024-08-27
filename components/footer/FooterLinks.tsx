import Link from 'next/link';

type FooterLinksProps = {
  links: { text: string; url: string }[];
};

const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
  );
};

export default FooterLinks;
