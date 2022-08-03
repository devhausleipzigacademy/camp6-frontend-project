import React, { useEffect } from "react";
import { useState } from "react";

// The Custom Button is just a placeholder that we can rename and redesign
import { CustomButton } from "./custombutton";

// The timer is largely working but needs to be designed and made customizable

export function Timer() {
	//
	// Bindings
	//
	// placeholder till we have a taskProp
	let placeholderTask = "working on the Timer";

	// bindings for timer lengths and switching between work and break time
	const workLength: number = 1;
	const breakLength: number = 1;
	const timeIntervals: number[] = [workLength, breakLength];

	// no magic numbers
	const work: number = 0;
	const teaBreak: number = 1;

	//
	// React Hooks
	//
	// UseStates
	const [seconds, setSeconds] = useState<number>(0);
	const [activeTime, SetActiveTime] = useState<number>(work);
	const [minutes, setMinutes] = useState<number>(timeIntervals[activeTime]);
	const [paused, setPaused] = useState<boolean>(true);
	const [timerDisplay, SetTimerDisplay] = useState<TimerDisplay>("Work");
	const [timerEnded, SetTimerEnded] = useState<boolean>(false);

	// when seconds run out reduce minutes by one and check if timerEnded
	useEffect(() => {
		if (seconds == -1) {
			if (minutes == 0) {
				SetTimerEnded(true);
			} else {
				setMinutes(minutes - 1);
				setSeconds(59);
			}
		}
	}, [seconds]);

	// switch from break to work - when? only when counter hits zero
	useEffect(() => {
		if (timerEnded == true) {
			if (activeTime == work) {
				SetActiveTime(teaBreak);
				SetTimerDisplay("Break");
			} else {
				SetActiveTime(work);
				SetTimerDisplay("Work");
			}
			SetTimerEnded(false);
			setMinutes(timeIntervals[activeTime]);
			setSeconds(0);
		}
	}, [timerEnded]);

	//
	// Utility Functions
	//

	const startReset = () => {
		setMinutes(timeIntervals[activeTime]);
		setSeconds(0);
		setPaused(false);
	};

	const pause = () => {
		if (!paused) {
			setPaused(true);
		} else {
			setPaused(false);
		}
	};

	// Timer that is activated when counter is changed
	useEffect(() => {
		if (!paused) {
			const interval = setTimeout(() => {
				setSeconds(seconds - 1);
			}, 100);
			return () => {
				clearTimeout(interval);
			};
		}
	}, [seconds, paused]);

	return (
		<div className="flex flex-col gap-4 items-center">
			<p>Task: {placeholderTask}</p>

			<p>
				{timerDisplay}:{minutes.toString().padStart(2, "0")}:
				{seconds.toString().padStart(2, "0")}
			</p>
			<CustomButton clickHandler={startReset} text="Start/Reset" />
			<CustomButton clickHandler={pause} text="Stop/Resume" />
		</div>
	);
}
