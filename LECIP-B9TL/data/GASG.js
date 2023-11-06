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
    "2222": {
        1: {
            front: { 
                renderType: "twoline",
                top: "GO AHEAD SINGAPORE",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "(FONTS ARE STILL WIP)",
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
    34: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL RD",
                    "TPE",
                    "TAMPINES AVE 10 / 5 / 2 / 7"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 7 / 2 / 5 / 10",
                    "TPE",
                    "PUNGGOL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    36: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "TOMLINSON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARINE PARADE RD",
                    "SUNTEC CITY",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SOMERSET MRT",
                    "ORCHARD BOULEVARD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ORCHARD RD",
                    "SUNTEC CITY",
                    "MARINE PARADE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "34A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34A",
                destination: "TAMPINES AVE ",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL RD",
                    "TPE",
                    "TAMPINES AVE 10"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    68: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68",
                destination: "TAMPINES",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ELIAS RD",
                    "PASIR RIS ST 71",
                    "PASIR RIS DR 10 / 1 / 12",
                    "TAMPINES AVE 10 / 11 / 6",
                    "TAMPINES CONCOURSE"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "68",
                destination: "PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 6 / 11 / 10",
                    "PASIR RIS DR 12 / 1 / 10",
                    "PASIR RIS ST 71",
                    "ELIAS RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    118: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118",
                destination: "CHANGI BIZ PARK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL WAY",
                    "TPE",
                    "TAMPINES AVE 10 / 8 / 1",
                    "SIMEI AVE",
                    "XILIN AVE",
                    "EXPO MRT",
                    "CHANGI SOUTH AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "118",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI SOUTH AVE 1",
                    "EXPO MRT",
                    "XILIN AVE",
                    "SIMEI AVE",
                    "TAMPINES AVE 1 / 8 / 10",
                    "TPE",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "118A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118A",
                destination: "SIMEI AVE ",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 10 / 5",
                    "TAMPINES AVE 8 / 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "118B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118B",
                destination: "TPE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SIMEI AVE",
                    "TAMPINES AVE 5 / 10",
                    "TAMPINES AVE 1 / 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    119: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "119",
                destination: "KOVAN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENGKANG EAST WAY",
                    "RIVERVALE DRIVE",
                    "HOUGANG AVE 8",
                    "UPPER SERANGOON RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "119",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 8",
                    "RIVERVALE DRIVE",
                    "SENGKANG EAST WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    381: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "381",
                destination: "PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PUNGGOL EAST (LOOP)"
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
    },
    384: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "384",
                destination: "PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PUNGGOL CENTRAL",
                 "PUNGGOL WAY",
                 "NORTHSHORE DRIVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "384",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    1111: {
        1: {
            front: { 
                renderType: "twoline",
                top: "SORRY",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "NOT IN SERVICE",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "NOT IN",
                topFont: "LECIP-6:4",
                topSpacing: 1,

                bottom: "SERVICE",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    2222: {
        1: {
            front: { 
                renderType: "twoline",
                top: "GO AHEAD SINGAPORE",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "(FONTS ARE STILL WIP)",
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
    }
}

EDSImages.GASG = {
}
