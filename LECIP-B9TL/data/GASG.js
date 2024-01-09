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
    2: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "KAMPONG BAHRU",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "CHANGI VILLAGE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "2A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2A",
                destination: "TANAH MERAH MRT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EU TONG SEN ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "2B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2B",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK STN EXIT A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "TAMPINES",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL CENTRAL / FIELD",
                    "TAMPINES EXPRESSWAY",
                    "PASIR RIS DR 12 / 1 / 10",
                    "PASIR RIS ST 71",
                    "PASIR RIS INT",
                    "PASIR RIS DR 3 / ST 21",
                    "TAMPINES EAST MRT",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES ST 21",
                    "TAMPINES EAST MRT",
                    "PASIR RIS ST 21 / DR 3",
                    "PASIR RIS ST 71",
                    "PASIR RIS DR 10 / 1 / 12", 
                    "TAMPINES EXPRESSWAY",
                    "PUNGGOL FIELD / CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "3A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "3A",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DRIVE 12"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    6: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "6",
                destination: "PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DR 3",
                    "LOYANG AVE",
                    "LOYANG WAY",
                    "LOYANG CRES (LOOP)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "6",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    12: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "KAMPONG BAHRU",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TANAH MERAH MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TANAH MERAH MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "12E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "12e",
                destination: "KAMPONG BAHRU",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DR 6 / 1",
                    "TAMPINES AVE 7 / 2",
                    "SIMEI RD",
                    "BEDOK SOUTH RD",
                    "ECP (EXPRESS)",
                    "BUGIS",
                    "CLARKE QUAY",
                    "CHINATOWN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12e",
                destination: "PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CLARKE QUAY",
                    "BUGIS",
                    "ECP (EXPRESS)",
                    "BEDOK SOUTH RD",
                    "SIMEI RD",
                    "TAMPINES AVE 2 / 7",
                    "PASIR RIS DR 1 / 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    15: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "15",
                destination: "MARINE PARADE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS ST 52, DR 1 / 8",
                    "TAMPINES AVE 12 / 7 / 4 / 5 / 1",
                    "BEDOK NORTH RD",
                    "BEDOK RESERVOIR RD",
                    "JALAN EUNOS / MRT",
                    "STILL RD",
                    "TELOK KURAU RD",
                    "JOO CHIAT PLACE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "15",
                destination: "PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JOO CHIAT PLACE",
                    "STILL RD",
                    "JALAN EUNOS / MRT",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH RD",
                    "TAMPINES WEST MRT",
                    "TAMPINES AVE 1 / 5 / 4 / 7 / 12",
                    "PASIR RIS DR 8/1, ST 52"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "15A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "15A",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN EUNOS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    17: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "17",
                destination: "BEDOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "17",
                destination: "PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "17A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "17A",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 4",
                    "SBST BEDOK NTH DEPOT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17A",
                font: "LECIP-20:9",
                spacing: 2
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
        },
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
    "34A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34A",
                destination: "TAMPINES AVE 5",
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
    "34B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34B",
                destination: "TAMPINES AVE 10",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 5 / 2 / 7",
                    "CHANGI AIRPORT",
                    "TAMPINES AVE 7 / 2 / 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34B",
                font: "LECIP-20:9",
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
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "SUNTEC CITY",
                    "MARINE PARADE RD",
                    "SIGLAP RD / LINK"
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
    "36A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36A",
                destination: "TOMLINSON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARINE PARADE RD",
                    "SUNTEC CITY",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SOMERSET MRT / RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "36B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36B",
                destination: "SIGLAP RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARINE PARADE RD",
                    "SUNTEC CITY",
                    "DHOBY GHAUT MRT",
                    "ORCHARD BOULEVARD",
                    "TOMLINSON RD (LOOP)",
                    "ORCHARD RD",
                    "SUNTEC CITY",
                    "MARINE PARADE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "36T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36T",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI AIRPORT T2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36T",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    43: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "UPP EAST COAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SERANGOON CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SERANGOON CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "43E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43e",
                destination: "MARINE PARADE RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PAYA LEBAR MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43e",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PAYA LEBAR MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "43M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43M",
                destination: "SERANGOON MRT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL WAY",
                    "SENGKANG EAST RD",
                    "BUANGKOK MRT",
                    "BUANGKOK GREEN",
                    "YIO CHU KANG RD"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43M",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YIO CHU KANG RD",
                    "BUANGKOK GREEN",
                    "BUANGKOK MRT",
                    "SENGKANG EAST RD",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    62: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "SIMS AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALJUNIED MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALJUNIED MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "62A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62A",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "AJLUNIED MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62A",
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
        },
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
    "68A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68A",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "68B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68B",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 11"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    82: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "82",
                destination: "SERANGOON MRT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPPER SERANGOON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "82",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "82",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPPER SERANGOON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "82",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    83: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83",
                destination: "SENGKANG",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "83",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "83T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83T",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENGKANG INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83T",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    84: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "84",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENTUL CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "84",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    85: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "85",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN KAYU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "85",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN KAYU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "85A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "85A",
                destination: "SENGKANG E RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN AVE 2",
                    "JALAN KAYU",
                    "SENGKANG WEST WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85A",
                font: "LECIP-20:9",
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
        },
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
        },
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
    136: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "136",
                destination: "ANG MO KIO",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SERANGOON GARDEN WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "136",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "136",
                destination: "PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SERANGOON GARDEN WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "136",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    354: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "354",
                destination: "PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "DOWNTOWN EAST",
                    "JALAN LOYANG BESAR",
                    "PASIR RIS DR 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "354",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    358: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "358",
                destination: "PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ELIAS RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "358",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "358T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "358T",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PASIR RIS INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "358T",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    359: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "359",
                destination: "PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DRIVE 3 / 12"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "359",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "359T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "359T",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PASIR RIS INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "359T",
                font: "LECIP-20:6",
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
    "382G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382G",
                destination: "PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PUNGGOL FIELD",
                 "SUMANG WALK",
                 "SUMANG LINK",
                 "SENTUL CRESCENT",
                 "PUNGGOL PLACE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382G",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "382W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382W",
                destination: "PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PUNGGOL PLACE",
                 "SENTUL CRESCENT",
                 "SUMANG LINK",
                 "SUMANG WALK",
                 "PUNGGOL FIELD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382W",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "382A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382A",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "SUMANG LANE",
                 "BLK 226A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382A",
                font: "LECIP-20:6",
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
    386: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "386",
                destination: "PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PUNGGOL FIELD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "386",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "386A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "386A",
                destination: "TERMINATING AT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "EDGEDALE PLAINS",
                 "BLK 682A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "386A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    403: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "403",
                destination: "PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                 "PASIR RIS DR 8 / 1",
                 "ELIAS RD",
                 "PASIR RIS RD",
                 "PASIR RIS PARK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "403",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    518: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "518",
                destination: "BAYFRONT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ORCHARD RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "518",
                destination: "PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ORCHARD RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "518A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "518A",
                destination: "BAYFRONT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    661: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "661",
                destination: "MARINA BLVD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "661",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "661",
                destination: "PASIR RIS DR 1",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "661",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    666: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "666",
                destination: "MARINA BLVD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "666",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "666",
                destination: "PUNGGOL DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "666",
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
