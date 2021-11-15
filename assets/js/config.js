$().setconfig({
  // client_id: "2347354-617d80cb-e124-4a0a-8664-d82f41af5328",
  info: {
    title: "TATA",
    description: ".",
    termsOfService: ".",
    contact: {
      email: "."
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    version: "1.0.0"
  },
  client: {
    servers: [
      {
        url: "https://tata.aliconnect.nl/api"
      }
    ]
  },
  whitelist: [
    "145.8.179.223",
    "185.65.53.57",
    "84.83.118.234",
    "31.161.149.224",
    "::1"
  ],
  components: {
    schemas: {
      Code: {
        allOf: [
          "Item"
        ],
        properties: {
          Code: {
            label: "Code",
            placeholder: "Code",
            kop: 0
          }
        }
      },
      Controller: {
        allOf: [
          "Item"
        ]
      },
      Equipment: {
        allOf: [
          "Item"
        ]
      },
      Groups: {
        allOf: [
          "Item"
        ]
      },
      Instrument: {
        allOf: [
          "Item"
        ]
      },
      IO: {
        allOf: [
          "Item"
        ],
        properties: {
          PLC: {
            label: "Control",
            placeholder: "PLC",
            classID: 2107,
            kop: 0,
            filter: 1
          },
          RIO: {
            placeholder: "RIO",
            kop: 0,
            filter: 1
          },
          SystemRIO: {
            classID: 2107
          },
          Slot: {
            placeholder: "Slot",
            kop: 0,
            filter: 1
          },
          SystemSlot: {
            classID: 2107
          },
          Word: {
            placeholder: "Address",
            kop: 0,
            filter: 1
          },
          Bit: {
            kop: 0,
            filter: 1
          },
          IO_Type: {
            kop: 0,
            filter: 1,
            option: [
              "DI",
              "DO",
              "AI",
              "AO"
            ]
          },
          PLC_Address: [],
          TagCode: {
            label: "System",
            kop: 1,
            placeholder: "TagCode"
          },
          Description: {
            placeholder: "Description",
            kop: 1
          },
          Area: {
            placeholder: "Area",
            filter: 1,
            classID: 2107
          },
          Object: {
            placeholder: "Object",
            filter: 1,
            classID: 2107
          },
          Sensor: {
            placeholder: "Sensor",
            filter: 1,
            classID: 2107
          },
          Signal: {
            placeholder: "Signal",
            filter: 1,
            classID: 2107
          },
          PID: {
            placeholder: "P&ID",
            filter: 1,
            kop: 2,
            classID: 4002
          },
          Drawing: {
            placeholder: "Drawing",
            filter: 1,
            kop: 2,
            classID: 4002
          },
          Range: {
            placeholder: "Range"
          },
          SafetyIO: {
            placeholder: "Safety",
            type: "checkbox",
            filter: 1
          },
          ContactType: {
            placeholder: "ContactType",
            filter: 1,
            option: [
              false,
              "NC"
            ]
          },
          ActivePassive: {
            placeholder: "Active/Passive",
            filter: 1,
            option: [
              "Active",
              "Passive"
            ]
          },
          Remarks: {
            placeholder: "Remarks"
          },
          HistorianInstance: {
            label: "Historian",
            placeholder: "Instance"
          },
          HistorianTemplate: {
            placeholder: "Template"
          },
          HistorianAttribute: {
            placeholder: "Attribute"
          },
          DA_DBnr: {
            placeholder: "DA DB",
            type: "number"
          },
          DA_Type: {
            placeholder: "DA Type"
          }
        }
      },
      IOInterface: {
        allOf: [
          "Item"
        ]
      },
      IOModule: {
        allOf: [
          "Item"
        ]
      },
      ObjectNr: {
        allOf: [
          "Item"
        ],
        properties: {
          ObjectNr: {
            label: "ObjectNr",
            placeholder: "ObjectNr",
            kop: 0
          }
        }
      },
      ObjectType: {
        allOf: [
          "Item"
        ]
      },
      Onderdelen: {
        allOf: [
          "Item"
        ]
      },
      PID: {
        allOf: [
          "Item"
        ],
        properties: {
          PID: {
            label: "P&ID",
            placeholder: "P&ID",
            colname: "pid_PID",
            idname: "keyname"
          },
          Rev: {
            placeholder: "Rev",
            colname: "pid_Rev"
          }
        }
      },
      ProcessObject: {
        allOf: [
          "Item"
        ],
        properties: {
          ProcessObject: {
            colname: "ProcessObject",
            label: "ProcessObject",
            placeholder: "ProcessObject",
            kop: 0
          },
          Area: {
            placeholder: "Area",
            filter: 1,
            kop: 2,
            colname: "Area",
            schema: "area",
            classID: 4003
          },
          ProcessObjectType: {
            colname: "ProcessObjectType",
            placeholder: "ProcessObjectType",
            filter: 1,
            kop: 2,
            classID: 4015
          }
        }
      },
      ControlSensor: {
        allOf: [
          "Item"
        ],
        properties: {
          Sensor: {
            colname: "Sensor",
            label: "Sensor",
            placeholder: "Sensor",
            kop: 0
          },
          SensorType: {
            placeholder: "SignalType",
            filter: 1,
            colname: "SensorType",
            schema: "objecttype",
            classID: 4015
          },
          ControlModule: {
            colname: "ControlModule",
            classID: 4101,
            idname: "masterID",
            placeholder: "ControlModule",
            filter: 1
          },
          Description: {
            placeholder: "Description",
            kop: 2,
            colname: "pid_Description"
          },
          TagCode: {
            colname: "TagCode"
          }
        }
      },
      Signal: {
        allOf: [
          "Item"
        ]
      },
      Supplier: {
        allOf: [
          "Item"
        ]
      },
      Tagcode: {
        allOf: [
          "Item"
        ],
        properties: {
          TagCode: {
            label: "P&ID Tag",
            placeholder: "TagCode",
            idname: "keyname",
            kop: 0
          },
          Area: {
            placeholder: "Area",
            filter: 1,
            kop: 2,
            classID: 4003
          },
          Code: {
            placeholder: "Code",
            filter: 1,
            kop: 2,
            classID: 4004
          },
          Object: {
            placeholder: "Object"
          },
          Nr: {
            placeholder: "Nr"
          },
          Signal: {
            placeholder: "Signal",
            classID: 4015
          },
          ObjectNr: {
            placeholder: "Object number",
            filter: 1,
            kop: 2,
            classID: 4005
          },
          ProcessObject: {
            placeholder: "ProcessObject",
            filter: 1,
            kop: 2,
            classID: 4016
          },
          PID: {
            placeholder: "P&ID",
            filter: 1,
            kop: 1,
            classID: 4002
          },
          Description: {
            placeholder: "Description",
            kop: 1
          }
        }
      },
      Task: {
        allOf: [
          "Item"
        ]
      },
      tata_area: {
        allOf: [
          "Item"
        ],
        properties: {
          keyname: {
            label: "Area",
            placeholder: "Area",
            kop: 0,
            idname: "keyname",
            colname: "AreaKey"
          },
          Type: {
            placeholder: "System type",
            options: [
              "Area",
              "Process",
              "Unit",
              "Equipment",
              "Control"
            ],
            kop: 0
          },
          Name: {
            placeholder: "Title",
            kop: 0
          }
        }
      },
      plcio: {
        allOf: [
          "Item"
        ],
        properties: {
          SYMBOLNAME: {
            label: "PLC IO",
            placeholder: "SymbolName",
            kop: 0
          },
          ADRESS: {
            placeholder: "Adress",
            kop: 1
          },
          DATA_TYPE: {
            placeholder: "Data type",
            kop: 2
          },
          COMMENT: {
            placeholder: "Comment"
          }
        }
      },
      rio: {
        allOf: [
          "Item"
        ],
        properties: {
          RIO: {
            label: "RIO",
            placeholder: "RIO",
            kop: 0
          },
          PLC: {
            placeholder: "PLC",
            kop: 1,
            schema: "PLC"
          }
        }
      }
    }
  },
  menu: {
    Organisatie: {
      className: "crm",
      Contacts: {
        className: "contact",
        href: "Contact?$top=100"
      },
      Companies: {
        className: "company",
        href: "Company?$top=100"
      }
    },
    Tasks: {
      className: "task",
      Schakelberichten: {
        className: "task",
        href: "Schakelbericht"
      }
    },
    "System Engineering": {
      Equipment: {
        href: "Equipment?$top=100"
      },
      ISA88tree: {
        href: "#host/isa88tree"
      },
      instruments: {
        href: "#tata_instrument?top=50"
      },
      PID: {
        href: "#pid?top=50"
      },
      "PID Tags": {
        href: "#pidtag?top=50"
      },
      Area: {
        href: "#area?top=50"
      },
      Codes: {
        href: "#code?top=50"
      },
      PLC: {
        href: "#plc?top=50"
      },
      RIO: {
        href: "#rio?top=50"
      },
      IO: {
        href: "#io?top=50"
      },
      "PLC IO": {
        href: "#plcio?top=50"
      }
    },
    Tools: {
      Import: {
        href: "#import/xls/get"
      }
    }
  },
})
