import React from "react";
import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import "./Chatheader.css";

function Chatheader({ channelName }) {
	return (
		<div className="chatheader">
			<div className="chatheader__left">
				<h3>
					<span className="chatheader__hash">#</span>
					{channelName}
				</h3>
			</div>
			<div className="chatheader__right">
				<NotificationIcon />
				<EditLocationRoundedIcon />
				<PeopleAltRoundedIcon />

				<div className="chatheader__search">
					<input placeholder="Search" />
					<SearchRoundedIcon />
				</div>

				<SendRoundedIcon />
				<HelpRoundedIcon />
			</div>
		</div>
	);
}

export default Chatheader;
