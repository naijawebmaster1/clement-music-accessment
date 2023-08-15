import React from "react";
import { Icon } from '@iconify/react';
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Overview",
    href: "/",
    icon: <Icon icon="radix-icons:dashboard" style={{ fontSize: '22px' }} />,
  },
  {
    label: "Learning Path",
    href: "/learning",
    icon: <Icon icon="carbon:direction-fork-filled" style={{ fontSize: '22px' }} />,
  },
  {
    label: "Explore Courses",
    href: "/learning",
    icon: <Icon icon="bi:music-player" style={{ fontSize: '22px' }} />,
  },
  {
    label: "Quick Tips",
    href: "/Quick Tips",
    icon: <Icon icon="ic:outline-tips-and-updates" style={{ fontSize: '22px' }} />,
  },
  {
    label: "Instructors",
    href: "/Instructors",
    icon: <Icon icon="material-symbols:person-outline" style={{ fontSize: '22px' }} />,
  },
];
export const defaultNavItemsExtra: NavItem[] = [
  {
    label: "Songs Sheet",
    href: "/#",
    icon: <Icon icon="ps:music" style={{ fontSize: '22px' }} />,
  },
  {
    label: "My List",
    href: "/learning",
    icon: <Icon icon="gg:list" style={{ fontSize: '22px' }} />,
  },
  {
    label: "Shop",
    href: "/Quick Tips",
    icon: <Icon icon="mdi:cart-outline" style={{ fontSize: '22px' }} />,
  },
];
export const newCourses: any[] = [
  {
    title: "R & B Tutorial by Melanie ",
    description: "Beginner | 20 lessons",
    image: "/images/img-1.svg",
  },
  {
    title: "How to Play Triads by Daniey ",
    description: "Advance | 20 lessons",
    image: "/images/img-2.svg"
  },
  {
    title: "Jimi Hendrix Licks by Melanie ",
    description: "Intermediate | 20 lessons",
    image: "/images/img-3.svg",
  },
];
export const newSongSheet: any[] = [
  {
    title: "R & B Tutorial by Melanie ",
    description: "Beginner | 20 lessons",
    image: "/images/img-4.svg",
  },
  {
    title: "How to Play Triads by Daniey ",
    description: "Advance | 20 lessons",
    image: "/images/img-5.svg"
  },
  {
    title: "Jimi Hendrix Licks by Melanie ",
    description: "Intermediate | 20 lessons",
    image: "/images/img-6.svg",
  },
];
export const welcomeItem: any[] = [
  {
    title: "Learning Path",
    description: "Start",
    image: <Icon icon="carbon:direction-fork-filled" style={{ fontSize: '22px', color: "#4777E1" }} />,
  },
  {
    title: "Explore Courses",
    description: "View All CXourses",
    image: <Icon icon="bi:music-player" style={{ fontSize: '22px', color: "#4777E1" }} />
  },
  {
    title: "Songs Sheet",
    description: "View All Songs",
    image: <Icon icon="ps:music" style={{ fontSize: '22px', color: "#4777E1" }} />,
  },
];