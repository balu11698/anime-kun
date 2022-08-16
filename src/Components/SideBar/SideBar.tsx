import { useState } from "react";
import { config, useTransition } from "react-spring";
import {
  SSideBar,
  SSideBarItem,
  SSideBarName,
  SSideBarSubName,
  SSideSubAnimate
} from "./SideBar.styles";

interface SideBarProps {
  isSideBar: boolean;
}

interface ISideBar {
  name: SideBarName | any;
  id: number;
  subMenu?: ISideBarSub[];
}

interface ISideBarSub {
  name: string;
  id: number;
  to: string;
}
enum SideBarName {
  Anime = "Anime",
  Manga = "Manga"
}

const SideBar = ({ isSideBar }: SideBarProps) => {
  const items: ISideBar[] = [
    {
      name: SideBarName.Anime,
      id: 1,
      subMenu: [
        { name: "Top Anime", id: 11, to: "top-anime" },
        { name: "Season Anime", id: 12, to: "season-anime" },
        { name: "Genre", id: 13, to: "anime-genre" },
        { name: "Recent Promos", id: 14, to: "recent-promos" }
      ]
    },
    {
      name: SideBarName.Manga,
      id: 2,
      subMenu: [{ name: "Top Manga", id: 21, to: "/top-manga" }]
    }
  ];
  const [subMenuSelected, setSubmenuSelected] = useState<any>({
    ...Object.fromEntries(
      new Map(
        items.map((item) => {
          return [item.name, false];
        })
      )
    ),
    selected: ""
  });

  const transitionSideNav = useTransition(isSideBar, {
    from: { opacity: 0, transform: "translate3d(-20px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(20px,0,0)" },
    config: { ...config.molasses, duration: !isSideBar ? 250 : 500 }
  });

  const onItemSelect = (name: SideBarName) => {
    setSubmenuSelected({
      ...subMenuSelected,
      [name]: !subMenuSelected[name],
      selected: subMenuSelected.selected === name ? "" : name
    });
  };

  return (
    <SSideBar isSideBar={isSideBar}>
      {transitionSideNav((props, item) => (
        <SSideBarItem style={props}>
          {item &&
            items.map((menu) => (
              <div key={menu.id}>
                <SSideBarName
                  onClick={() => {
                    onItemSelect(menu.name);
                  }}>
                  {menu.name}
                </SSideBarName>
                <SSideSubAnimate
                  opened={subMenuSelected.selected === menu.name ? 1 : 0}
                  height={menu?.subMenu?.length !== (0 || undefined) ? menu?.subMenu?.length : 0}>
                  {/* {subMenuSelected.selected === menu.name && */}
                  {menu?.subMenu?.map((subName) => (
                    <SSideBarSubName key={subName.id} to={subName.to}>
                      {subName?.name}
                    </SSideBarSubName>
                  ))}
                </SSideSubAnimate>
              </div>
            ))}
        </SSideBarItem>
      ))}
    </SSideBar>
  );
};

export default SideBar;
