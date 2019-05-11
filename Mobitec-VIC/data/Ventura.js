EDSFormats.Ventura = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Ventura-16",
            spacing: 1
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top", // make bottom realise that overflows should be taken account for
            margin: {
                top: 9,
                right: 'width(serviceNumber)',
                bottom: {
                    $$cond: {
                        "$bottomMargin !== null": "$bottomMargin",
                        "else": "0"
                    }
                }
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination.text+' '+$serviceNumber"
    },
    destService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Ventura-16",
            spacing: 1
        },
        destination: {
            align: "left,top",
            margin: {
                left: 1,
                top: '$topMargin'
            },
            text: "$destination",
            spacing: 1
        },
        text: "$destination.text+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    trainReplacement: {
        destination: {
            align: "left,centre-y",
            margin: {
                left: 3
            },
            text: "$destination",
            spacing: 1,
            font: "Mobitec-13:8"
        },
        stopping: { // possibly implement groups
            align: "right,top",
            margin: {
                right: 'width(image) + len(3) + len(6)',
                top: 1
            },
            text: "Stopping",
            spacing: 1,
            font: "Mobitec-6:5"
        },
        allStations: {
            align: "right,bottom",
            margin: {
                right: 'width(image) + len(3)',
                bottom: 1
            },
            text: "All Stations",
            spacing: 1,
            font: "Mobitec-6:5"
        },
        image: {
            align: "right",
            image: "train"
        },
        text: "$destination+' SAS'"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.Ventura = {
    1: {
        front: {
            renderType: "logo",
            image: "notInService",
            text: "NOT IN SERVICE"
        }
    },
    2: {
        front: {
            renderType: "logo",
            image: "logo",
            text: "VENTURA LOGO"
        }
    },

3: {
    front: {
        renderType: "message",
        font : "Buse-16",
        text: "SPECIAL"
    }
},

    1601: { // TRAM REPLACEMENTS
        front: {
            renderType: "standardService",
            serviceNumber: "16",
            destination: {
                text: "Melbourne Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    1602: {
        front: {
            renderType: "standardService",
            serviceNumber: "16",
            destination: {
                text: "Kew",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    // 1901: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "19", // Double check
    //         destination: {
    //             text: "North Coburg",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    // 1902: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "19",
    //         destination: {
    //             text: "Flinders Street",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    // 6401: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "64", // awaiting font
    //         destination: {
    //             text: "Monash Uni",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    // 6402: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "64",
    //         destination: {
    //             text: "East Brighton",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "Tram Replacement"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    6701: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "Melbourne Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6702: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "Carnegie",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7801: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: {
                text: "Prahran",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7802: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: {
                text: "North Richmond",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9601: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: {
                text: "St. Kilda Beach",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9602: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: {
                text: "East Brunswick",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Tram Replacement"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },

    6006: { // TRAIN REPLACEMENTS
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Caulfield",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6106: { // will have to check code
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Caulfield",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6906: { // for fun
        front: {
            renderType: "trainReplacement",
            destination: "Caulfield"
        }
    },
    6039: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Stony Point",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "All Stations"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6139: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Stony Point",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Train Replacement",
                "Limited Express"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },

    2011: { // REGULAR SERVICES
        front: {
            renderType: "standardService",
            serviceNumber: "201",
            destination: {
                text: "Deakin Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Express to Deakin"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    5511: {
        front: {
            renderType: "standardService",
            serviceNumber: "551",
            destination: {
                text: "Latrobe Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Southern Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6311: {
        front: {
            renderType: "standardService",
            serviceNumber: "631",
            destination: {
                text: "Waverley Gdns",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Clayton",
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6312: {
        front: {
            renderType: "standardService",
            serviceNumber: "631",
            destination: {
                text: "Southland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni",
                "via Clayton"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6881: {
        front: {
            renderType: "standardService",
            serviceNumber: "688",
            destination: {
                text: "Upper F.T Gully",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Ridge Road",
                "via Sky High",
                "via Olinda"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6882: {
        front: {
            renderType: "standardService",
            serviceNumber: "688",
            destination: {
                text: "Croydon Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Olinda",
                "via Sky High",
                "via Ridge Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    // 6911: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "691",
    //         destination: {
    //             text: "Waverley Gardens",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "via"
    //         ],
    //         scrollFont: 'Mobitec-6:5'
    //     }
    // },
    6931: {
        front: {
            renderType: "standardService",
            serviceNumber: "693",
            destination: {
                text: "Belgrave Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via F'tree Gully Rd",
                "via Burwood Hwy"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6932: {
        front: {
            renderType: "standardService",
            serviceNumber: "693",
            destination: {
                text: "Oakleigh Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Burwood Hwy"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6941: {
        front: {
            renderType: "standardService",
            serviceNumber: "694",
            destination: {
                text: "Mt. Dandenong",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "Sky High",
                {
                    text: "via Olinda Township",
                    font: "Mobitec-6:5;Space-Width=1"
                }
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6942: {
        front: {
            renderType: "standardService",
            serviceNumber: "694",
            destination: {
                text: "Belgrave Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Sassafras"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6943: {
        front: {
            renderType: "standardService",
            serviceNumber: "694",
            destination: {
                text: "Olinda Township",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Sassafras"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    6951: {
        front: {
            renderType: "standardService",
            serviceNumber: "695",
            destination: {
                text: "Gembrook",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Emerald"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7031: {
        front: {
            renderType: "standardService",
            serviceNumber: "703",
            destination: {
                text: "Blackburn Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Bentleigh",
                "via Clayton",
                "via Monash Uni",
                "via K-Mart Plaza",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7032: {
        front: {
            renderType: "standardService",
            serviceNumber: "703",
            destination: {
                text: "Middle Brighton",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via K-Mart Plaza",
                "via Monash Uni",
                "via Clayton",
                "via Bentleigh"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7033: {
        front: {
            renderType: "destService",
            serviceNumber: "703",
            destination: {
                text: "South ṡńOakleigh",
                font: "Mobitec-7:7"
            },
            topMargin: 4
        }
    },
    7091: {
        front: {
            renderType: "standardService",
            serviceNumber: "709",
            destination: {
                text: "Noble Park Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [,
                "via Parkmore S/C", // Double check
                "via Waterways Est."
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7092: {
        front: {
            renderType: "standardService",
            serviceNumber: "709",
            destination: {
                text: "Mordialloc Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waterways Est.",
                "via Parkmore S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7331: {
        front: {
            renderType: "standardService",
            serviceNumber: "733",
            destination: {
                text: "Box Hill",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7332: {
        front: {
            renderType: "standardService",
            serviceNumber: "733",
            destination: {
                text: "Oakleigh Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    // 7333: {
    //     front: {
    //         renderType: "standardService",
    //         serviceNumber: "733",
    //         destination: {
    //             text: "Monash",
    //             font: "Mobitec-7:7"
    //         },
    //         scrolls: [
    //             "University"
    //         ],
    //         scrollFont: 'Mobitec-7:7'
    //     }
    // },
    7361: {
        front: {
            renderType: "standardService",
            serviceNumber: "736",
            destination: {
                text: "Mitcham Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Vermont Stn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7371: {
        front: {
            renderType: "standardService",
            serviceNumber: "737",
            destination: {
                text: "Croydon Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via G Waverley",
                "via Knox City",
                "via Boronia",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7372: {
        front: {
            renderType: "standardService",
            serviceNumber: "737",
            destination: {
                text: "Monash Uni",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Boronia",
                "via Knox City",
                "via G Waverley"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7421: {
        front: {
            renderType: "standardService",
            serviceNumber: "742",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via F.T Gully Rd",
                "via G Waverley"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7422: {
        front: {
            renderType: "standardService",
            serviceNumber: "742",
            destination: {
                text: "Eastland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Oakleigh",
                "via G Waverley"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7531: {
        front: {
            renderType: "standardService",
            serviceNumber: "753",
            destination: {
                text: "Boronia Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Knoxfield Shops",
                "via F.T Gully Road"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7532: {
        front: {
            renderType: "standardService",
            serviceNumber: "753",
            destination: {
                text: "Glen Waverley",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "F.T Gully Road",
                "via Knoxfield Shops"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7541: {
        front: {
            renderType: "standardService",
            serviceNumber: "754",
            destination: {
                text: "Rowville",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Wheelers Hill",
                "Stud Park"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7651: {
        front: {
            renderType: "standardService",
            serviceNumber: "765",
            destination: {
                text: "Mitcham Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Blackburn",
                "via Forest Hill"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7652: {
        front: {
            renderType: "standardService",
            serviceNumber: "765",
            destination: {
                text: "Box Hill",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Forest Hill",
                "via Blackburn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7671: {
        front: {
            renderType: "standardService",
            serviceNumber: "767",
            destination: {
                text: "Southland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Chadstone"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7672: {
        front: {
            renderType: "standardService",
            serviceNumber: "767",
            destination: {
                text: "Box Hill",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Deakin Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7781: {
        front: {
            renderType: "standardService",
            serviceNumber: "778",
            destination: {
                text: "Kananook Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Brunei Rd"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7791: {
        front: {
            renderType: "standardService",
            serviceNumber: "779",
            destination: {
                text: "Frankston Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook Stn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    7792: {
        front: {
            renderType: "standardService",
            serviceNumber: "779",
            destination: {
                text: "Belvedere",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook Stn"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8001: {
        front: {
            renderType: "standardService",
            serviceNumber: "800",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Oakleigh",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8021: {
        front: {
            renderType: "standardService",
            serviceNumber: "802",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Mulgrave",
                "via Monash Uni",
                "via Oakleigh",
                "via Chadstone",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8022: {
        front: {
            renderType: "standardService",
            serviceNumber: "802",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Chadstone",
                "via Oakleigh",
                "via Monash Uni",
                "via Mulgrave",
                "Station"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8041: {
        front: {
            renderType: "standardService",
            serviceNumber: "804",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Oakleigh",
                "via Monash Uni",
                "via Wheelers Hill"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8111: {
        front: {
            renderType: "standardService",
            serviceNumber: "811",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Southland"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8112: {
        front: {
            renderType: "standardService",
            serviceNumber: "811",
            destination: {
                text: "Brighton",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Springvale",
                "via Southland"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8141: {
        front: {
            renderType: "standardService",
            serviceNumber: "814",
            destination: {
                text: "Springvale South",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8151: {
        front: {
            renderType: "standardService",
            serviceNumber: "815",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Parkmore S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8152: {
        front: {
            renderType: "standardService",
            serviceNumber: "815",
            destination: {
                text: "Noble Park",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Parkmore S/C"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8221: {
        front: {
            renderType: "standardService",
            serviceNumber: "822",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Cheltenham"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8222: {
        front: {
            renderType: "standardService",
            serviceNumber: "822",
            destination: {
                text: "Sandringham Stn",
                font: "Mobitec-7:6:1"
            },
            scrolls: [
                "via Murrumbeena"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8241: {
        front: {
            renderType: "standardService",
            serviceNumber: "824",
            destination: {
                text: "Keysborough",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Westall"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8231: {
        front: {
            renderType: "standardService",
            serviceNumber: "823",
            destination: {
                text: "Southland",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Moorabin"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8281: {
        front: {
            renderType: "standardService",
            serviceNumber: "828",
            destination: {
                text: "Hampton Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Dandenong",
                "via Cheltenham"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8282: {
        front: {
            renderType: "standardService",
            serviceNumber: "828",
            destination: {
                text: "Berwick Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Cheltenham",
                "via Dandenong",
                "via Fountain Gate",
                "via Southland"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8321: {
        front: {
            renderType: "standardService",
            serviceNumber: "832",
            destination: {
                text: "Carrum Downs",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8322: {
        front: {
            renderType: "standardService",
            serviceNumber: "832",
            destination: {
                text: "Frankston Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kananook"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8441: {
        front: {
            renderType: "standardService",
            serviceNumber: "844",
            destination: {
                text: "Doveton",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Kidds Rd",
                "via Mccrae St"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8481: {
        front: {
            renderType: "standardService",
            serviceNumber: "848",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8482: {
        front: {
            renderType: "standardService",
            serviceNumber: "848",
            destination: {
                text: "Brandon Park",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8491: {
        front: {
            renderType: "standardService",
            serviceNumber: "849",
            destination: {
                text: "Mossgiel Park",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Reema Blvd",
                "via End Hills Shops"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8571: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: {
                text: "Dandenong Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Patterson Lks"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    8621: {
        front: {
            renderType: "standardService",
            serviceNumber: "862",
            destination: {
                text: "Chadstone",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Waverley Gdns",
                "via Monash Uni",
                "via Oakleigh",
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9001: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "Rowville",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Chadstone",
                "via Oakleigh",
                "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    },
    9002: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "Caulfield Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via Monash Uni",
                "via Oakleigh",
                "via Chadstone"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    }
}

EDSExtras.Ventura = {};

EDSImages.Ventura = {
    notInService: [
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    logo: [
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
    ],
    train: [
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
};
