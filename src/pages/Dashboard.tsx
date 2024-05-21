import React from "react"
import { StatList } from "../components/stats/StatBox/StatBoxElements.ts";
import StatBox from "../components/stats/StatBox/StatBox.tsx";
import StatTable from "../components/stats/StatTable/StatTable.tsx";
export default function Dashboard(){
    return (
        <div style={{width:"100%", display:"grid",gridTemplateRows:"max-content max-content",gap:"20px",marginTop:"40px"}}>
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
            <StatList>
                <StatTable 
                    _idHeader="Genre" 
                    valueHeader="Total Count" 
                    data={
                        [
                            {
                                "_id": "Hip Hop",
                                "total": 2
                            },
                            {
                                "_id": "Balad",
                                "total": 1
                            }
                        ]
                    }
                />
                <StatTable 
                    _idHeader="Genre" 
                    valueHeader="Total Count" 
                    data={
                        [
                            {
                                "_id": "Hip Hop",
                                "total": 2
                            },
                            {
                                "_id": "Balad",
                                "total": 1
                            }
                        ]
                    }
                />
                <StatTable 
                    _idHeader="Genre" 
                    valueHeader="Total Count" 
                    data={
                        [
                            {
                                "_id": "Hip Hop",
                                "total": 2
                            },
                            {
                                "_id": "Balad",
                                "total": 1
                            }
                        ]
                    }
                />
                <StatTable 
                    _idHeader="Genre" 
                    valueHeader="Total Count" 
                    data={
                        [
                            {
                                "_id": "Hip Hop",
                                "total": 2
                            },
                            {
                                "_id": "Balad",
                                "total": 1
                            }
                        ]
                    }
                />
            </StatList>
        </div>
    );
}