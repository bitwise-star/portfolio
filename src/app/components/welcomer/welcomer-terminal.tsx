import { Terminal } from "../terminal/terminal";
import { TerminalLine } from "../terminal/terminal-line";

const terminalContent = [
  { index: 1, text: "Star OS [Version 1.0]" },
  { index: 2, text: "(c) Bitwise Star. All rights reserved." },
  { index: 3, text: "whoami", path: "$" },
  { index: 4, text: "I'm a Full Stack developer who loves to code a lot of stuff." },
  { index: 5, text: "→ I'm 19 years old" },
  { index: 6, text: "→ I'm turning into a Full Stack developer, learning more about front-end development" },
  { index: 7, text: "→ My main programming languages are Javascript/Typescript" },
  { index: 8, text: "→ I live in Rio de Janeiro, Brazil" },
  { index: 9, text: "→ Studying Computer Science from home" },
  { index: 10, text: "→ I'm curious about hardware and robotics" },
  { index: 11, text: "→ I love creating automations and also create bots for Discord!" },
  { index: 12, text: "" }
];

export function WelcomerTerminal() {
	return (
    <Terminal title="bitwisedev@localhost~">
      {terminalContent.map(({ text, path, index }) => (
        <TerminalLine key={index} path={path}>
          {text}
        </TerminalLine>
      ))}
    </Terminal>
	);
}