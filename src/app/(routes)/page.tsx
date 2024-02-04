import React from "react";
import ApplyIGO from "@/Components/ApplyIGO";
import Header from "@/Components/Header";
import Participate from "@/Components/Participate";
import PreviousIGO from "@/Components/PreviousIGO";
import UpcomingIGO from "@/Components/UpcomingIGO";

const Home = () => {
    return (
        <>
            <Header />
            <UpcomingIGO />
            <PreviousIGO />
            <Participate />
            <ApplyIGO />
        </>
    )
};

export default Home;