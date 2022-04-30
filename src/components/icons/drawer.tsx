interface DrawerIconProps {
  className: string;
}

const DrawerIcon = (props: DrawerIconProps) => {
  return (
    <svg
      class={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};

export default DrawerIcon;
