EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-20:12",
                    "else": "$serviceFont"
                }
            },
            spacing: 3
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 1
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: 1
            }
        },
        text: "$top"
    },
    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    }
}

EDSData.GASG = {
    "1000": {
        1: {
            front: {
                renderType: "twoline",
                top: "FONTS MAY BE WRONG",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "WORK IN PROGRESS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "GO AHEAD",
                topFont: "LECIP-6:3",
                topSpacing: 1,

                bottom: "SG",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    "381": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "381",
                destination: "PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL EAST (LOOP"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "381",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    }
}

EDSImages.GASG = {
}
