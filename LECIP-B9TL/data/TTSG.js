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
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: {
                $$cond: {
                    "$spacing === null" : 3,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "LECIP-10"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "FULL"
    },
    'centreMessageServiceScroll': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 1
            },
            text: '$serviceNumber',
            font: 'LECIP-20:12',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 1
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        },
        bottom: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 1
            },
            text: '$bottom',
            font: '$bottomFont',
            spacing: 1
        }
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
    41: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "41"
                },
                "TOH GUAN RD",
                "TOH GUAN RD EAST",
                "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "41"
                },
                "TOH TUCK RD",
                "TOH GUAN RD EAST",
                "TOH GUAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },   
    49: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG WEST ST 42",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG WEST ST 42",
                    topFont: "LECIP-10",
        
                    serviceNumber: "49"
                },
                "JALAN AHMAD IBRAHIM",
                "CORPORATION DR",
                "LAKESIDE MRT",
                "JURONG WEST ST 51"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "49"
                },
                "JURONG WEST ST 51",
                "LAKESIDE MRT",
                "CORPORATION DR",
                "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },   
    66: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "66"
                },
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    "JALAN JURONG KECHIL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "66"
                },
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "JURONG TOWN HALL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },  
    "66A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT TIMAH RD",
                    "LITTLE INDIA STN EXIT A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "66B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TEKKA CENTRE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "66C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66C",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "OPP BEAUTY WORLD STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66C",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "66K": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "BEDOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "66"
                },
                    "BUKIT BATOK CENTRAL",
                    "DUNEARN RD",
                    "LITTLE INDIA",
                    "MACPHERSON RD / EST",
                    "BEDOK RESERVOIR RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "66"
                },
                    "BEDOK RESERVOIR RD",
                    "MACPHERSON EST / RD",
                    "LITTLE INDIA",
                    "BUKIT TIMAH RD",
                    "BUKIT BATOK CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },  
    77: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "MARINA CENTRE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "LECIP-10",
        
                    serviceNumber: "77"
                },
                    "TOH TUCK AVE",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-20:12",
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
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "77"
                },
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
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "77F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "STAMFORD RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "LECIP-10",
        
                    serviceNumber: "77"
                },
                    "TOH TUCK AVE",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-20:12",
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
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "77"
                },
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
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    78: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "CLEMENTI MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "78"
                },
                    "PENJURU RD",
                    "TANJONG PENJURU",
                    "PANDAN RD / AVE",
                    "WEST COAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG TOWN HALL",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "LECIP-10",
        
                    serviceNumber: "78"
                },
                    "WEST COAST RD",
                    "PANDAN RD",
                    "TANJONG PENJURU",
                    "PENJURU RD",

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "78A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TANJONG PENJURU",
                    "OPP CLP INTL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "78J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "CLEMENTI MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "78"
                },
                "PENJURU RD",
                "TANJONG PENJURU",
                "PANDAN RD / AVE",
                "WEST COAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG EAST MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "78"
                },
                  "WEST COAST RD",
                  "PANDAN RD",
                  "TANJONG PENJURU",
                  "PENJURU RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    79: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "JURONG EAST MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "79"
                },
                    "PENJURU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "BOON LAY",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "LECIP-10",
        
                    serviceNumber: "79"
                },
                    "PENJURU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "79A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG EAST LIB"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BOON LAY INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    96: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96",
                destination: "CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "LECIP-10",
        
                    serviceNumber: "96"
                },
                    "CLEMENTI RD",
                    "NAT'L UNIVERSITY OF S'PORE",
                    "KENT RIDGE CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "96A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "KENT RIDGE CRES",
                    "NUS RAFFLES HALL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "96B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CLEMENTI STN EXIT A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    97: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "MARINA CENTRE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "LECIP-10",
        
                    serviceNumber: "97"
                },
                    "AYE",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRON AVE / MBS",
                    "SUNTEC CITY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "97"
                },
                    "SUNTEC CITY",
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "97E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "MARINA CENTRE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "AYE",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRON AVE / MBS",
                    "SUNTEC CITY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SUNTEC CITY",
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "97F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "RAFFLES QUAY",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "RAFFLES QUAY",
                    topFont: "LECIP-10",
        
                    serviceNumber: "97"
                },
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "(SKIP MBS)",
                    "(SKIP SUNTEC)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "97"
                },
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    98: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG PIER WAY",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG PIER WAY",
                    topFont: "LECIP-10",
        
                    serviceNumber: "98"
                },
                    "JURONG EAST AVE 1",
                    'JURONG WEST AVE 1',
                    "LAKESIDE MRT",
                    "CORPORATION DR",
                    "JURONG PORT RD",
                    "JALAN BUROH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "98",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "JUR PIER",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "98"
                },
                    "JALAN BUROH",
                    "JURONG PORT RD",
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "98",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "JUR EAST",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    "98A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CORPORATION PL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "98B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG PIER WAY",
                    "JUR ISLAND CHECKPOINT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "98M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "CORPORATION RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CORPORATION RD",
                    topFont: "LECIP-10",
        
                    serviceNumber: "98M"
                },
                "JURONG EAST AVE 1",
                'JURONG WEST AVE 1',
                "LAKESIDE MRT",
                "CORPORATION DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "98M",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "CORP RD",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "98M"
                },
                "CORPORATION DR",
                "LAKESIDE MRT",
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "98M",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "JUR EAST",
                bottomFont: "LECIP-6:3",
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
                scrolls: [{
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "LECIP-10",
        
                    serviceNumber: "106"
                },
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
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "106"
                },
                    "ROBINSON RD",
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
    },
    "106A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "C'WEALTH AVE WEST",
                    "CLEMENTI STN EXIT B"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "106F": {
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
                    "CITY HALL MRT",
                    "SOUTH BRIDGE RD",
                    "(SKIP SUNTEC / MBS)"
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
                    "ROBINSON RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST",
                    "(SKIP MBS / SUNTEC)"

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
    },
    143: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "TOA PAYOH",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TOA PAYOH",
                    topFont: "LECIP-10",
        
                    serviceNumber: "143"
                },
                    "TEBAN GARDENS RD",
                    "WEST COAST RD",
                    "HARBOURFRONT",
                    "CHINATOWN",
                    "ORCHARD TURN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "143"
                },
                    "ORCHARD RD",
                    "CHINATOWN",
                    "HARBOURFRONT",
                    "WEST COAST RD",
                    "TEBAN GARDENS RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "143M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143M",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "143M",
                    top: "LOOPS AT",
                    topFont: "LECIP-7:5",

                    bottom: "PANDAN GARDENS",
                    bottomFont: "LECIP-7:5"
                },
                    "JURONG TOWN HALL RD",
                    "TEBAN GARDEN RD",
                    "PANDAN GARDENS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    167: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "LECIP-10",
        
                    serviceNumber: "167"
                },
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "167"
                },
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "167F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "LECIP-10",
        
                    serviceNumber: "167"
                },
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "167"
                },
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    "SKIP FULLERTON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    169: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "ANG MO KIO",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "ANG MO KIO",
                    topFont: "LECIP-10",
        
                    serviceNumber: "169"
                },
                    "WOODLANDS AVE 9",
                    "ADMIRALTY RD EAST",
                    "YISHUN MRT",
                    "SEMBAWANG RD",
                    "ANG MO KIO AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "169"
                },
                    "ANG MO KIO AVE 3",
                    "SEMBAWANG RD",
                    "YISHUN MRT",
                    "ADMIRALTY RD EAST",
                    "WOODLANDS AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "169A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "OPP YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "169B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "WOODLANDS AVE 8",
                    "BEF ADMIRALTY RD WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    171: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "BUKIT PANJANG MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT PANJANG MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "171"
                },
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "MANDAI RD",
                    "PETIR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "171"
                },
                    "PETIR RD",
                    "MANDAI RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    173: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "LECIP-10",
        
                    serviceNumber: "173"
                },
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "JALAN BATU NILAM",
                    "HUME AVE",
                    "BEAUTY WORLD MRT",
                    "TOH TUCK RISE / RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "173",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "CLEMENTI",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "173"
                },
                    "TOH TUCK RISE / RD",
                    "BEAUTY WORLD MRT",
                    "HUME AVE",
                    "JALAN BATU NILAM",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "173",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    "173A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK EAST AVE 4",
                    "BLK 254"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "173A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    177: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT PANJANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "177"
                },
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "M I N D E F",
                    "UPPER BUKIT TIMAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "177",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "PANJANG",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "177"
                },
                    "JELEBU RD",
                    "UPPER BUKIT TIMAH RD",
                    "M I N D E F",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "177",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    183: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "SCIENCE PARK RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SCIENCE PARK RD",
                    topFont: "LECIP-10",
        
                    serviceNumber: "183"
                },
                    "TOH GUAN RD EAST",
                    "CLEMENTI MRT",
                    "CLEMENTI RD",
                    "PASIR PANJANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "183"
                },
                    "PASIR PANJANG RD",
                    "CLEMENTI RD",
                    "CLEMENTI MRT",
                    "TOH GUAN RD EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "183B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TOH TUCK AVE",
                    "AFT TOH TUCK LINK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    189: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "CLEMENTI AVE 1",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI AVE 1",
                    topFont: "LECIP-10",
        
                    serviceNumber: "189"
                },
                    "BUKIT BATOK ST 23",
                    "CLEMENTI AVE 6",
                    "CLEMENTI MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "189"
                },
                    "CLEMENTI MRT",
                    "CLEMENTI AVE 6",
                    "BUKIT BATOK ST 23"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "189A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK ST 23",
                    "OPP MIDVIEW BUILDING"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    282: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "282",
                destination: "CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "LECIP-10",
        
                    serviceNumber: "282"
                },
                    "CLEMENTI AVE 5",
                    "CLEMENTI AVE 2",
                    "CLEMENTI WEST ST 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "282",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    284: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "284",
                destination: "CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "LECIP-10",
        
                    serviceNumber: "284"
                },
                    "CLEMENTI AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "284",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    285: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "285",
                destination: "CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "LECIP-10",
        
                    serviceNumber: "285"
                },
                    "CLEMENTI AVE 2",
                    "WEST COAST RD",
                    "PANDAN LOOP"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "285",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    333: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "333",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "333"
                },
                    "TOH GUAN RD", 
                    "JURONG EAST AVE 1",
                    "JURONG EAST ST 32"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "333",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    334: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "334",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "334"
                },
                    "JURONG EAST AVE 1", 
                    "JURONG WEST AVE 1",
                    "JURONG EAST ST 42"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "334",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    335: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "335",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "335"
                },
                    "JURONG TOWN HALL RD",
                    "BOON LAY WAY",
                    "JURONG WEST ST 51",
                    "JURONG WEST ST 52",
                    "JURONG WEST ST 41"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "335",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    653: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "MARINA BLVD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 2",
                    "BUKIT BATOK EAST AVE 3",
                    "ROBINSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "HILLVIEW AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 2",
                    "HUME AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    656: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SEMBAWANG RD",
                    "ADMIRALTY LINK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "656F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                    "(SKIP BRAS BASAH RD)",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SEMBAWANG RD",
                    "ADMIRALTY LINK",
                    "(SKIP FULLERTON RD)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    657: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "MARINA BLVD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG EAST AVE 1",
                    "TOH GUAN RD",
                    "ROBINSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "JURONG WEST AVE ",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "TOH GUAN RD",
                    'JURONG EAST AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    663: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "663F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD",
                    "(SKIP FULLERTON RD)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    665: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "MARSILING DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "665F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                    "(SKIP COLLYER QUAY)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "MARSILING DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE",
                    "(SKIP FULLERTON RD)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    670: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "MARINA BLVD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN AVE 6",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "ANSON RD",
                    "ROBINSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "YISHUN AVE 7",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    801: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "801",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "801"
                },
                    "YISHUN CENTRAL",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6",
                    "YISHUN ST 42",
                    "YISHUN AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "801",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    825: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "825",
                destination: "YIO CHU KANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YIO CHU KANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "825"
                },
                    "ANG MO KIO AVE 6",
                    "LENTOR MRT",
                    "LENTOR RD",
                    "LENTOR LOOP"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "825",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    853: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "LOR 1 GEYLANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "LOR 1 GEYLANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "853"
                },
                    "YISHUN AVE 2",
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "UPPER SERANGOON RD",
                    "GEYLANG BAHRU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "853"
                },
                    "GEYLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },   
    "853M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "UPP EAST COAST",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                    renderType: "destScroll",
                    top: "UPP EAST COAST",
                    topFont: "LECIP-7:5",
        
                    serviceNumber: "853M"
                },
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "SIMS AVE",
                    "TANJONG KATONG RD",
                    "MARINE PARADE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARINE PARADE RD",
                    "TANJONG KATONG RD",
                    "GEYLANG RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },   
    854: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "BEDOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "854"
                },
                    "YISHUN AVE 2",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 3",
                    "JLN EUNOS",
                    "NEW UPPER CHANGI RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "854"
                },
                    "NEW UPPER CHANGI RD",
                    "EUNOS LINK",
                    "HOUGANG AVE 3",
                    "YIO CHU KANG RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },   
    855: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "HARBOURFRONT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "855"
                },
                    "YISHUN AVE 2",
                    "UPPER THOMSON RD",
                    "ADAM RD",
                    "QUEENSWAY",
                    "JALAN BUKIT MERAH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "855"
                },
                    "JALAN BUKIT MERAH",
                    "QUEENSWAY",
                    "FARRER RD",
                    "UPPER THOMSON RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },   
    856: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "856"
                },
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "WOODLANDS NORTH MRT",
                    "MARSILING ESTATE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "856",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "W'LANDS",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "856"
                },
                    "WOODLANDS TRAIN CHKPT",
                    "WOODLANDS NORTH MRT",
                    "SENOKO RD",
                    "ADMIRALTY RD WEST",
                    "CANBERRA"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "856",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },   
    "856A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "WDL TRAIN CHECKPT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "856A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "856B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CANBERRA RD",
                    "AFT ADMIRAL HILL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "856B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    857: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "TEMASEK AVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TEMASEK AVE",
                    topFont: "LECIP-10",
        
                    serviceNumber: "857"
                },
                    "YIO CHU KANG RD",
                    "BENDEMEER RD",
                    "LITTLE INDIA",
                    "BENCOOLEN ST",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "857"
                },
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },  
    "857A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YIO CHU KANG RD",
                    "OPP SUNRISE GARDENS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "857B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TEMASEK AVE",
                    "PROMENADE MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "STAMFORD RD",
                    "CAPITOL BUILDING"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },  
    "857F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "STAMFORD RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "LECIP-10",
        
                    serviceNumber: "857"
                },
                    "YIO CHU KANG RD",
                    "BENDEMEER RD",
                    "LITTLE INDIA",
                    "BENCOOLEN ST",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "857"
                },
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },  
    858: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "CHANGI AIRPORT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "858"
                },
                    "WOODLANDS AVE 9",
                    "SEMBAWANG WAY",
                    "YISHUN MRT",
                    "JALAN KAYU",
                    "T P E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "858"
                },
                    "T P E",
                    "JALAN KAYU",
                    "YISHUN MRT",
                    "SEMBAWANG WAY",
                    "WOODLANDS AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },   
    "858A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "OPP YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "858B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN KAYU",
                    "AFT SELETAR CAMP G"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    859: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "LECIP-10",
        
                    serviceNumber: "859"
                },
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "SEMBAWANG CRES",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "859"
                },
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "SEMBAWANG CRES",
                    "ADMIRALTY LINK",
                    "CANBERRA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },   
    "859A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859A",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "ADMIRALTY DR",
                    "SEMBWAWANG CRES"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "859B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859B",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SEMBAWANG CRES",
                    "ADMIRALTY DR",
                    "ADMIRALTY LINK",
                    "CANBERRA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "859T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859T",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859T",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    870: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "TENGAH",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "LECIP-10",
        
                    serviceNumber: "870"
                },
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 3",
                    "PLANTATION CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "JUR TOWN HALL",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JUR TOWN HALL",
                    topFont: "LECIP-10",
        
                    serviceNumber: "870"
                },
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 3",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK AVE 1",
                    "JURONG EAST CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "870A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PLANTATION CRES",
                    "BLK 111"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    882: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "882"
                },
                    "WELLINGTON CIRCLE",
                    "MONTREAL DR",
                    "MONTREAL LINK",
                    "SEMBAWANG RD",
                    "SEMBAWANG PARK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "882",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "882A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MONTREAL LINK",
                    "BLK 592A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "882A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    883: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "YISHUN CTRL 2",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN CTRL 2",
                    topFont: "LECIP-10",
        
                    serviceNumber: "883"
                },
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 2",
                    "YISHUN MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "883"
                },
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883",
                topFont: "LECIP-10",
                topSpacing: 2,

                bottom: "S'WANG",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    "883A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CANBERRA WAY",
                    "BLK 129A"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "883A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "883B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883B",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SEMBAWANG RD",
                    "OPP BLK 590C"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "883B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "883M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "YISHUN AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "YISHUN AVE 5",
                    topFont: "LECIP-10",
        
                    serviceNumber: "883M"
                },
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 7",
                    "YISHUN AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883M",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "YISHUN",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "883M"
                },
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "883M",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "S'WANG",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    941: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "941",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "941"
                },
                    "BUKIT BATOK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "941",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    944: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "944",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "944"
                },
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "944",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    945: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "945",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "945"
                },
                    "BUKIT BATOK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "945",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    947: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "947",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "947"
                },
                    "BUKIT BATOK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "947",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    963: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "HARBOURFRONT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "963"
                },
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 3",
                    "A Y E",
                    "ALEXANDRA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "963"
                },
                    "ALEXANDRA RD",
                    "A Y E",
                    "BUKIT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "963E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "HARBOURFRONT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "963e"
                },
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "963e"
                },
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "963R": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963R",
                destination: "R W S",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "RESORTS WORLD",
                    topFont: "LECIP-10",
        
                    serviceNumber: "963R"
                },
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963R",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963R",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "963R"
                },
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963R",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    965: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "SENGKANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SENGKANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "965"
                },
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "YISHUN MRT",
                    "COMPASSVALE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "WDL TEMP INT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WDL TEMP INT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "965"
                },
                    "COMPASSVALE RD",
                    "YISHUN MRT",
                    "YISHUN AVE 7",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "965A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "OPP YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "965T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965T",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENGKANG INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965T",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    966: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "MARINE PARADE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "MARINE PARADE",
                    topFont: "LECIP-10",
        
                    serviceNumber: "966"
                },
                    "WOODLANDS AVE 3",
                    "PENDING RD",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "JALAN EUNOS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "966"
                },
                    "MARINE PARADE RD",
                    "JALAN EUNOS",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "PENDING RD"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "966A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARINE PARADE RD",
                    "OPP PARKWAY PARADE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    969: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "TAMPINES",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TAMPINES",
                    topFont: "LECIP-10",
        
                    serviceNumber: "969"
                },
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "T P E",
                    "TAMPINES CONCOURSE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "LECIP-10",
        
                    serviceNumber: "969"
                },
                    "TAMPINES CONCOURSE",
                    "T P E",
                    "YISHUN MRT",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "969A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN STN"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    974: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "BT PANJANG MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BT PANJANG MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "974"
                },
                    "UPPER JURONG RD",
                    "JURONG WEST ST 63",
                    "JALAN BOON LAY",
                    "CHOA CHU KANG MRT",
                    "CHOA CHU KANG WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JOO KOON",
                    topFont: "LECIP-10",
        
                    serviceNumber: "974"
                },
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG MRT",
                    "JALAN BOON LAY",
                    "JURONG WEST ST 63",
                    "UPPER JURONG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    980: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "LOR 1 GEYLANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "LOR 1 GEYLANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "980"
                },
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "LITTLE INDIA",
                    "BEACH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "980"
                },
                    "BEACH RD",
                    "LITTLE INDIA",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },   
    981: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SENOKO LOOP",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SENOKO LOOP",
                    topFont: "LECIP-10",
        
                    serviceNumber: "981"
                },
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "SENOKO RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SEMBAWANG",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "LECIP-10",
        
                    serviceNumber: "981"
                },
                    "SENOKO RD",
                    "SENOKO LOOP",
                    "SENOKO DR",
                    "ADMIRALTY RD WEST",
                    "CANBERRA RD"

                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    990: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "JURONG EAST MRT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST MRT",
                    topFont: "LECIP-10",
        
                    serviceNumber: "990"
                },
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 6",
                    "TOH GUAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "990"
                },
                    "TOH GUAN RD",
                    "BUKIT BATOK EAST AVE 6",
                    "BUKIT BATOK EAST AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    992: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "LECIP-10",
        
                    serviceNumber: "992"
                },
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                    "PLANTATION CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "LECIP-10",
        
                    serviceNumber: "992"
                },
                    "PLANTATION CRESCENT",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "992A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992A",
                destination: "ENDS AT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PLANTATION CRES",
                    "BLK 111"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "OFF",
                topFont: "LECIP-7:4",

                bottom: "SERVICE",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "message",
                text: "SPARE  BUS",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "SPARE",
                topFont: "LECIP-7:4", // check font

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        }
    },
    5000: {
        1: {
            front: {
                renderType: "twoline",
                top: "ROUTE FAMILIARISATION",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "TRAINING",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "ROUTE",
                topFont: "LECIP-6:3",
                topSpacing: 1,

                bottom: "FAM. TRG",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    5998: {
        1: {
            front: {
                renderType: "twoline",
                top: "BULIM DEPOT",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "CREW BUS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "BULIM",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "DEPOT",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5999: {
        1: {
            front: {
                renderType: "twoline",
                top: "MANDAI DEPOT",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "CREW BUS",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "MANDAI",
                topFont: "LECIP-7:5",
                topSpacing: 1,

                bottom: "DEPOT",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            }
        }
    },
    6666: {
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
                topFont: "LECIP-6:4",
                topSpacing: 1,

                bottom: "TRANSIT",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    7971: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "RAFFLES QUAY",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "RAFFLES QUAY",
                    topFont: "LECIP-10",
        
                    serviceNumber: "97e"
                },
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "(SKIP MBS)",
                    "(SKIP SUNTEC)"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "LECIP-10",
        
                    serviceNumber: "97e"
                },
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    7501: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "N1",
                destination: "YISHUN RING RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "NEWTON RD",
                    "TOA PAYOH CENTRAL",
                    "BISHAN ST 11",
                    "ANG MO KIO AVE 3",
                    "ANG MO KIO AVE 4",
                    "LENTOR AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "N1",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    7502: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "N2",
                destination: "WOODLANDS CTR RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MARSILING DR",
                    "WOODLANDS AVE 7"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "N2",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    9052: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TO WOODLANDS NORTH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TO CALDECOTT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    9031: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "E31",
                destination: "CCL EXPRESS BUS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HARBOURFRONT - KENT RIDGE"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "E31",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "E31",
                destination: "CCL EXPRESS BUS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "KENT RIDGE - HARBOURFRONT"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "E31",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "BUS  UNDER  REPAIR",
                font: "LECIP-20:9",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "UNDER",
                topFont: "LECIP-7:4", // check font

                bottom: "REPAIR",
                bottomFont: "LECIP-7:4"
            }
        }
    }
}

EDSImages.TTSG = {
}
