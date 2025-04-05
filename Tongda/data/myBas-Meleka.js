EDSFormats['BAS.MY Meleka (Prev. SBST)'] = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: {
                $$cond: {
                    "$destFont === null": "Mobitec-7:4",
                    "else": "$destFont"
                }
            },
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2500,

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination"
        
    },
    destScroll: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 0,
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 1
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Tongda-16:7",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber)'
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
                    "$bottomFont === null": "Mobitec-7:4",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "right",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
        
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
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
    scrollingDest: {
        __dynamic__: (matrix, data) => {
            let serviceNum = new TextObject(data.serviceNumber, Font.fromNameString("Tongda-16:7"), new Position(0, 0), 1)
            let destination = new TextObject(data.destination, Font.fromNameString("Tongda-16:7"), new Position(matrix.width, 0), 1)

            let serviceWidth = serviceNum.takeMeasure().width + 3
            let destinationWidth = destination.takeMeasure().width

            let framesNeeded = matrix.width + destinationWidth - serviceWidth
            let currentFrame = 0

            function drawFrame(frame) {
                destination.position.x = matrix.width - frame
                matrix.clearRectangle(0, 0, matrix.width, matrix.height)

                matrix.drawText(destination)
                
                matrix.clearRectangle(0, 0, serviceWidth, matrix.height)
                matrix.drawText(serviceNum)
            }

            if (matrix === window.controllerPreview) {
                return drawFrame(matrix.width - serviceWidth - 2)
            }

            __scrollingInterval__ = setInterval(() => {
                drawFrame(currentFrame++)
                if (currentFrame === framesNeeded) currentFrame = 0
            }, 50)
        },
        text: "$serviceNumber+' '+$destination"
    }
}
EDSData['BAS.MY Meleka (Prev. SBST)'] = {
    0: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "WELCOME PAGE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "BAS.MY  MELAKA",
                    topFont: "Tongda-16:7",
                }, 
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Tekan butang F1 untuk memilih laluan",
                    topFont: "Hanover-7:3",
                    bottom: "Press the F1 button to select service",
                    bottomFont: "Hanover-7:3",
                }, 
            ]
        }
    },
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "WIP",
            destination: "akan datang",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "WIP",
                    top: "AKAN DATANG",
                    topFont: "Tongda-16:7",
                }, {
                    renderType: "destScroll",
                    serviceNumber: "WIP",
                    top: "COMING SOON",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    12: {
        front: {
            renderType: "standardService",
            serviceNumber: "M12",
            destination: "AIRPORT / MELAKA SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "M12",
                    top: "AIRPORT",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "M12",
                    top: "MELAKA SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    "12T": {
        front: {
            renderType: "standardService",
            serviceNumber: "T12",
            destination: "AIRPORT / MELAKA SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "T12",
                    top: "AIRPORT",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "T12",
                    top: "MELAKA SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    100: {
        front: {
            renderType: "standardService",
            serviceNumber: "M100",
            destination: "BANDARAYA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "M100",
                    top: "BANDARAYA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "F100": {
        front: {
            renderType: "standardService",
            serviceNumber: "F100",
            destination: "BANDARAYA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F100",
                    top: "BANDARAYA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    101: {
        front: {
            renderType: "standardService",
            serviceNumber: "M101",
            destination: "PASAR MELAKA FEEDER",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "M101",
                    top: "PASAR MELAKA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
    "101F": {
        front: {
            renderType: "standardService",
            serviceNumber: "F101",
            destination: "PASAR MELAKA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "F101",
                    top: "PASAR MELAKA",
                    topFont: "Tongda-16:7",
                }
            ]
        }
    },
}

EDSExtras['BAS.MY Meleka (Prev. SBST)'] = {
}

EDSImages['BAS.MY Meleka (Prev. SBST)'] = {
"blank": [
    [0]
]
}
