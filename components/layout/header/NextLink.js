import Link from "next/link";
import { useRouter } from "next/router";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const NextLink = ({ href, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <NavigationMenu.Link active={isActive} {...props} />
    </Link>
  );
};

export default NextLink;
