import React from "react";
import BackDrop from "../components/backdrop";
import MngrDetail from "../components/mngrdetail";
import MngrRating from "./mngrrating";
import MngrReview from "./mngrreview";
const MngrMenu = ({ match, location }) => {
    const id = match.params.id;
    const auth = localStorage.getItem("auth");
    const token = localStorage.getItem("token");
    const verifyToken = async (t) => {
        await fetch("/api/verify", {
            method: "GET",
            headers: {
                "x-access-token": t,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (!res.response) {
                    window.location.href = "/user";
                }
            });
    };
    if (auth !== "true") {
        verifyToken(" ");
    }
    verifyToken(token);
    return (
        <React.Fragment>
            <BackDrop />
            <MngrDetail FID={id} />
            <MngrRating FID={id} />
            <MngrReview FID={id} />
        </React.Fragment>
    );
};

export default MngrMenu;