import React from 'react'

const Recursive = ({ data }) => {
    return (
        <>
            <div style={{ paddingLeft: "20px" }}>
                {
                    data.map((data) => {
                        return (
                            <span key={data.name}>{data.name}
                                <div>
                                    {data.children && <Recursive data={data.children} />}
                                </div>
                            </span>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Recursive
