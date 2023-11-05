EDSFormats.TTSG = {
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

EDSData.TTSG = {
    77: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "MARINA CENTRE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "6666": {
        1: {
            front: {
                renderType: "twoline",
                top: "TOWER TRANSIT SG",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "(FONTS ARE STILL WIP)",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "TOWER",
                topFont: "LECIP-6:3",
                topSpacing: 1,

                bottom: "TRANSIT",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    106: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BAYFRONT AVE / MBS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CENTRAL BOULEVARD",
                    "BAYFRONT AVE / MBS",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    }
}

EDSImages.TTSG = {
}
