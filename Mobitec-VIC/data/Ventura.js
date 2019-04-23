EDSFormats.Ventura = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Ventura-16",
            spacing: 2
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
            align: "centre-x,bottom,lock-pos",
            margin: {
                bottom: 0,
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    }
}

EDSData.Ventura = {
    6006: {
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
    6931: {
        front: {
            renderType: "standardService",
            serviceNumber: "693",
            destination: {
                text: "Belgrave Stn",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "via F'tree Gully Rd"
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
                "via G Waverly",
                "via Boronia",
                "via Knox City"
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
                "via Knox City",
                "via Boronia",
                "via G Waverly"
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
    9001: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "Rowville",
                font: "Mobitec-7:7"
            },
            scrolls: [
                // "via Chadstone",
                "via Oakleigh",
                // "via Monash Uni"
            ],
            scrollFont: 'Mobitec-6:5'
        }
    }
}
