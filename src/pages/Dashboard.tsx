import React from "react"
import { StatList } from "../components/stats/StatBox/StatBoxElements.ts";
import StatBox from "../components/stats/StatBox/StatBox.tsx";
export default function Dashboard(){
    return (
        <div style={{width:"100%"}}>
            <StatList>
                <StatBox
                    title="Number of Artists"
                    description="450"
                />
                <StatBox
                    title="Number of Songs"
                    description="450"
                />
                <StatBox
                    title="Number of Albums"
                    description="450"
                />
                <StatBox
                    title="Number of Genres"
                    description="450"
                />

            </StatList>
        </div>
    );
}