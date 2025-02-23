EDSFormats.Special = {
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
            rotateSpeed: 3000,

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
        
    },
    destScroll: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 1
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
                left: 'width(serviceNumber) - width(image)'
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

EDSData.Special = {
    0: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "WELCOME PAGE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "SPECIAL",
                    top: "Tekan butang F1",
                    topFont: "Hanover-7:4",
                    bottom: "untuk memilih laluan",
                    bottomFont: "Hanover-7:4",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "SPECIAL",
                    top: " Press the F1 button",
                    topFont: "Hanover-7:4",
                    bottom: "to select service",
                    bottomFont: "Hanover-7:4",
                },
            ]
        }
    },
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "TIADA PERKHIDMATAN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "TIADA PERKHIDMATAN",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "OFF SERVICE",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    2: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "SEWA KHAS / CHARTER",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "SEWA KHAS",
                    topFont: "Tongda-16:7",
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "CHARTER",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    3: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "LOOP SERVICE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "LOOP SERVICE",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    9999: {
        front: {
            renderType: "full"
        }
    },
}

EDSExtras.Special = {
}

EDSImages.Special = {
"blank": [
    [0]
]
}
