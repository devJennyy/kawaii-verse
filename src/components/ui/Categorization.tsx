/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/lib/shadcomponents/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/shadcomponents/ui/select";
import { FiGrid } from "react-icons/fi";
import { LuList, LuSettings2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  title: string;
  view: string;
  setView: any;
  hasMedia: boolean;
}

const MiniHeader: React.FC<Props> = ({ title, view, setView, hasMedia }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-6">
          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#FD1C68] from-35% to-[#FDAE8F] to-80%"></div>
          <p className="text-[30px] font-semibold bg-gradient-to-t from-[#FD1C68] from-25% to-[#FDAE8F] to-70% bg-clip-text text-transparent">
            {title}
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <Select>
            <SelectTrigger className="w-48 text-[15px] border border-[#27272A] focus:border-white rounded-md px-4">
              <SelectValue placeholder="Sort by" />
              <MdKeyboardArrowDown size={22} className="opacity-60" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="popular">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
                <SelectItem value="simulcast-season">
                  Simulcast Season
                </SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-48 border border-[#27272A] focus:border-white rounded-md px-4 text-[14px]">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[15px]">Filter by</p>
                <LuSettings2 size={16} className="opacity-60" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="flex flex-col w-48 p-4 gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[15px] pb-[1px]">Genre</p>
                <Select>
                  <SelectTrigger className="border-[#27272A] text-[14px]">
                    <SelectValue placeholder="Choose type" />
                    <MdKeyboardArrowDown size={22} className="opacity-60" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <div className="flex flex-row">
                        <div>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="action">Action</SelectItem>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="comedy">Comedy</SelectItem>
                          <SelectItem value="drama">Drama</SelectItem>
                          <SelectItem value="fantasy">Fantasy</SelectItem>
                          <SelectItem value="music">Music</SelectItem>
                          <SelectItem value="romance">Romance</SelectItem>
                        </div>

                        <div>
                          <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                          <SelectItem value="seinen">Seinen</SelectItem>
                          <SelectItem value="slice-of-life">
                            Slice of Life
                          </SelectItem>
                          <SelectItem value="shojo">Shojo</SelectItem>
                          <SelectItem value="shonen">Shonen</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="supernatural">
                            Supernatural
                          </SelectItem>
                          <SelectItem value="thriller">Thriller</SelectItem>
                        </div>
                      </div>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {hasMedia && (
                <div className="flex flex-col gap-1">
                  <p className="text-[15px] pb-[1px]">Media</p>
                  <Select>
                    <SelectTrigger className="border-[#27272A] text-[14px]">
                      <SelectValue placeholder="Choose type" />
                      <MdKeyboardArrowDown size={22} className="opacity-60" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="popular">All</SelectItem>
                        <SelectItem value="newest">Series</SelectItem>
                        <SelectItem value="alphabetical">Movies</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex flex-row justify-row items-center w-30 h-12 border border-[#27272A] rounded-md px-2">
            <button
              className={`${
                view == "grid" ? `bg-[#1A1A1A]` : `bg-transparent`
              } flex justify-center items-center rounded-sm w-11 h-8`}
              onClick={() => setView("grid")}
            >
              <FiGrid size={19} />
            </button>

            <button
              className={`${
                view == `list` ? `bg-[#1A1A1A]` : `bg-transparent`
              } flex justify-center items-center rounded-sm w-11 h-8`}
              onClick={() => setView("list")}
            >
              <LuList size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-[#151518] w-full pt-2">
        <div className="gradient-border-b"></div>
      </div>
    </div>
  );
};

export default MiniHeader;
