export const DiHola = () => {
  console.log('hola desde otro archivirus')
}

export const notesColors = () => {
  return {'0': ['#bebebe', '#bebebe', '#bebebe',
                '#bebebe', '#bebebe', '#bebebe',
                '#bebebe', '#bebebe', '#bebebe',
                '#bebebe', '#bebebe', '#bebebe'],

          '1': ['#ff9933', '#64c5af', '#d6a87c',
                '#00d27f', '#cd8c95', '#ffcc33',
                '#66ff33', '#ff66ff', '#0099ff',
                '#ff6633', '#9966cc', '#ff6666'],

          '2': ['#ff66ff', '#0099ff', '#ff6633',
                '#9966cc', '#ff6666', '#ff9933',
                '#64c5af', '#d6a87c', '#00d27f',
                '#cd8c95', '#ffcc33', '#66ff33'],

          '3': ['#00d27f', '#cd8c95', '#ffcc33',
                '#66ff33', '#ff66ff', '#0099ff',
                '#ff6633', '#9966cc', '#ff6666',
                '#ff9933', '#64c5af', '#d6a87c'],

          '4': ['#9966cc', '#ff6666', '#ff9933',
                '#64c5af', '#d6a87c', '#00d27f',
                '#cd8c95', '#ffcc33', '#66ff33',
                '#ff66ff', '#0099ff', '#ff6633'],

          '5': ['#ffcc33', '#66ff33', '#ff66ff',
                '#0099ff', '#ff6633', '#9966cc',
                '#ff6666', '#ff9933', '#64c5af',
                '#d6a87c', '#00d27f', '#cd8c95'],
          
          '6': ['#ff9933', '#64c5af', '#d6a87c',
                '#00d27f', '#cd8c95', '#ffcc33',
                '#66ff33', '#ff66ff', '#0099ff',
                '#ff6633', '#9966cc', '#ff6666']
  }
}

export const colorByNote = () => {
  return {
    'C':  '#0099ff',
    'C#': '#ff6633',
    'D':  '#9966cc',
    'D#': '#ff6666',
    'E': '#ff9933',
    'F': '#64c5af',
    'F#': '#d6a87c',
    'G': '#00d27f',
    'G#': '#cd8c95',
    'A': '#ffcc33',
    'A#': '#66ff33',
    'B': '#ff66ff',
    'noColor': '#bebebe'
  }
}

export const sortedNotesByString = () => {
  return {'1': 'E F F# G G# A A# B C C# D D#',
          '2': 'B C C# D D# E F F# G G# A A#',
          '3': 'G G# A A# B C C# D D# E F F#',
          '4': 'D D# E F F# G G# A A# B C C#',
          '5': 'A A# B C C# D D# E F F# G G#',
          '6': 'E F F# G G# A A# B C C# D D#'
  }
}

export const stringCorrespondencies = () => {
  return {
      '1': 'firststring',
      '2': 'secondstring',
      '3': 'thirdstring',
      '4': 'fourthstring',
      '5': 'fifthstring',
      '6': 'sixthstring'
  }
}

export const notesByFret = () => {
  return [['E1', 'B2', 'G3', 'D4', 'A5', 'E6'],
          ['F1', 'C2', 'G#3', 'D#4', 'A#5', 'F6'],
          ['F#1', 'C#2', 'A3', 'E4', 'B5', 'F#6'],
          ['G1', 'D2', 'A#3', 'F4', 'C5', 'G6'],
          ['G#1', 'D#2', 'B3', 'F#4', 'C#5', 'G#6'],
          ['A1', 'E2', 'C3', 'G4', 'D5', 'A6'],
          ['A#1', 'F2', 'C#3', 'G#4', 'D#5', 'A#6'],
          ['B1', 'F#2', 'D3', 'A4', 'E5', 'B6'],
          ['C1', 'G2', 'D#3', 'A#4', 'F5', 'C6'],
          ['C#1', 'G#2', 'E3', 'B4', 'F#5', 'C#6'],
          ['D1', 'A2', 'F3', 'C4', 'G5', 'D6'],
          ['D#1', 'A#2', 'F#3', 'C#4', 'G#5', 'D#6']]
}

export const allNotes = () => {
  return 'E1 F1 F#1 G1 G#1 A1 A#1 B1 C1 C#1 D1 D#1 ' +
         'B2 C2 C#2 D2 D#2 E2 F2 F#2 G2 G#2 A2 A#2 ' +
         'G3 G#3 A3 A#3 B3 C3 C#3 D3 D#3 E3 F3 F#3 ' +
         'D4 D#4 E4 F4 F#4 G4 G#4 A4 A#4 B4 C4 C#4 ' +
         'A5 A#5 B5 C5 C#5 D5 D#5 E5 F5 F#5 G5 G#5 ' +
         'E6 F6 F#6 G6 G#6 A6 A#6 B6 C6 C#6 D6 D#6 '
}

export const emptyStringsNoteColors = () => {
  let emptyArray = ['', '', '', '', '', '', '', '', '', '', '', '']
  return {'firststring': emptyArray,
          'secondstring': emptyArray,
          'thirdstring': emptyArray,
          'fourthstring': emptyArray,
          'fifthstring': emptyArray,
          'sixthstring': emptyArray
  }
}

const sortStringNotesFrom = (note) => {
  let initialNotes = ['C', 'C#', 'D', 'D#', 'E', 'F','F#', 'G', 'G#', 'A', 'A#', 'B']
  let newArray = []

  for (var x = initialNotes.indexOf(note); x < initialNotes.length; x++) {
    newArray.push(initialNotes[x])
  }

  for (var y = 0; y < initialNotes.indexOf(note); y++) {
    newArray.push(initialNotes[y])
  }
  return newArray
}

const standardTuning = () => {
  return {'nameOfTheTuning' : 'standard',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('E')],
                          '2': ['secondstring', sortStringNotesFrom('B')],
                          '3': ['thirdstring', sortStringNotesFrom('G')],
                          '4': ['fourthstring', sortStringNotesFrom('D')],
                          '5': ['fifthstring', sortStringNotesFrom('A')],
                          '6': ['sixthstring', sortStringNotesFrom('E')]
          
          }
  }
}

const openATuning = () => {
  return [{'nameOfTheTuning' : 'openA',
           'tuningInfo': { '1': ['firststring', sortStringNotesFrom('E')],
                           '2': ['secondstring', sortStringNotesFrom('A')],
                           '3': ['thirdstring', sortStringNotesFrom('E')],
                           '4': ['fourthstring', sortStringNotesFrom('C#')],
                           '5': ['fifthstring', sortStringNotesFrom('A')],
                           '6': ['sixthstring', sortStringNotesFrom('E')]}
          },
          {'nameOfTheTuning' : 'openA 1',
           'tuningInfo': { '1': ['firststring', sortStringNotesFrom('C#')],
                           '2': ['secondstring', sortStringNotesFrom('A')],
                           '3': ['thirdstring', sortStringNotesFrom('E')],
                           '4': ['fourthstring', sortStringNotesFrom('C#')],
                           '5': ['fifthstring', sortStringNotesFrom('A')],
                           '6': ['sixthstring', sortStringNotesFrom('E')]}
          },
          {'nameOfTheTuning' : 'openA 2',
           'tuningInfo': { '1': ['firststring', sortStringNotesFrom('C#')],
                           '2': ['secondstring', sortStringNotesFrom('A')],
                           '3': ['thirdstring', sortStringNotesFrom('E')],
                           '4': ['fourthstring', sortStringNotesFrom('A')],
                           '5': ['fifthstring', sortStringNotesFrom('E')],
                           '6': ['sixthstring', sortStringNotesFrom('A')]}
          },
          {'nameOfTheTuning' : 'slide openA',
           'tuningInfo': { '1': ['firststring', sortStringNotesFrom('E')],
                           '2': ['secondstring', sortStringNotesFrom('C#')],
                           '3': ['thirdstring', sortStringNotesFrom('A')],
                           '4': ['fourthstring', sortStringNotesFrom('E')],
                           '5': ['fifthstring', sortStringNotesFrom('A')],
                           '6': ['sixthstring', sortStringNotesFrom('E')]
          }
  }]
}

const openBTuning = () => {
  return [{'nameOfTheTuning' : 'openB',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D#')],
                          '2': ['secondstring', sortStringNotesFrom('B')],
                          '3': ['thirdstring', sortStringNotesFrom('F#')],
                          '4': ['fourthstring', sortStringNotesFrom('B')],
                          '5': ['fifthstring', sortStringNotesFrom('F#')],
                          '6': ['sixthstring', sortStringNotesFrom('B')]}
  }, 
          {'nameOfTheTuning' : 'openB 1',
           'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D#')],
                           '2': ['secondstring', sortStringNotesFrom('B')],
                           '3': ['thirdstring', sortStringNotesFrom('F#')],
                           '4': ['fourthstring', sortStringNotesFrom('D#')],
                           '5': ['fifthstring', sortStringNotesFrom('B')],
                           '6': ['sixthstring', sortStringNotesFrom('F#')]}
          }
  ]
}

const openCTuning = () => {
  return [{'nameOfTheTuning' : 'openC',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('E')],
                          '2': ['secondstring', sortStringNotesFrom('C')],
                          '3': ['thirdstring', sortStringNotesFrom('G')],
                          '4': ['fourthstring', sortStringNotesFrom('C')],
                          '5': ['fifthstring', sortStringNotesFrom('G')],
                          '6': ['sixthstring', sortStringNotesFrom('C')]}
          },
          {'nameOfTheTuning' : 'openC 1',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('G')],
                          '2': ['secondstring', sortStringNotesFrom('E')],
                          '3': ['thirdstring', sortStringNotesFrom('C')],
                          '4': ['fourthstring', sortStringNotesFrom('G')],
                          '5': ['fifthstring', sortStringNotesFrom('E')],
                          '6': ['sixthstring', sortStringNotesFrom('C')]}
          },
          {'nameOfTheTuning' : 'openC 2',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('G')],
                          '2': ['secondstring', sortStringNotesFrom('E')],
                          '3': ['thirdstring', sortStringNotesFrom('C')],
                          '4': ['fourthstring', sortStringNotesFrom('G')],
                          '5': ['fifthstring', sortStringNotesFrom('C')],
                          '6': ['sixthstring', sortStringNotesFrom('C')]}
          }
  ]
}

const openDTuning = () => {
  return [{'nameOfTheTuning' : 'openD',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D')],
                          '2': ['secondstring', sortStringNotesFrom('A')],
                          '3': ['thirdstring', sortStringNotesFrom('F#')],
                          '4': ['fourthstring', sortStringNotesFrom('D')],
                          '5': ['fifthstring', sortStringNotesFrom('A')],
                          '6': ['sixthstring', sortStringNotesFrom('D')]
          }
  }, 
          {'nameOfTheTuning' : 'openD 1',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D')],
                          '2': ['secondstring', sortStringNotesFrom('D')],
                          '3': ['thirdstring', sortStringNotesFrom('A')],
                          '4': ['fourthstring', sortStringNotesFrom('D')],
                          '5': ['fifthstring', sortStringNotesFrom('A')],
                          '6': ['sixthstring', sortStringNotesFrom('D')]
          }
  }
  ]
}

const openETuning = () => {
  return {'nameOfTheTuning' : 'openE',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('E')],
                          '2': ['secondstring', sortStringNotesFrom('B')],
                          '3': ['thirdstring', sortStringNotesFrom('G#')],
                          '4': ['fourthstring', sortStringNotesFrom('E')],
                          '5': ['fifthstring', sortStringNotesFrom('B')],
                          '6': ['sixthstring', sortStringNotesFrom('E')]
          }
  }
}

const openFTuning = () => {
  return [{'nameOfTheTuning' : 'openF',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('F')],
                          '2': ['secondstring', sortStringNotesFrom('C')],
                          '3': ['thirdstring', sortStringNotesFrom('F')],
                          '4': ['fourthstring', sortStringNotesFrom('C')],
                          '5': ['fifthstring', sortStringNotesFrom('A')],
                          '6': ['sixthstring', sortStringNotesFrom('F')]
          }
  },
          {'nameOfTheTuning' : 'openF 1',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('C')],
                          '2': ['secondstring', sortStringNotesFrom('A')],
                          '3': ['thirdstring', sortStringNotesFrom('F')],
                          '4': ['fourthstring', sortStringNotesFrom('C')],
                          '5': ['fifthstring', sortStringNotesFrom('F')],
                          '6': ['sixthstring', sortStringNotesFrom('C')]
          }
  }]
}

const openGTuning = () => {
  return [{'nameOfTheTuning' : 'openG',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D')],
                          '2': ['secondstring', sortStringNotesFrom('B')],
                          '3': ['thirdstring', sortStringNotesFrom('G')],
                          '4': ['fourthstring', sortStringNotesFrom('D')],
                          '5': ['fifthstring', sortStringNotesFrom('G')],
                          '6': ['sixthstring', sortStringNotesFrom('D')]}
          },
          {'nameOfTheTuning' : 'openG 1',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D')],
                          '2': ['secondstring', sortStringNotesFrom('B')],
                          '3': ['thirdstring', sortStringNotesFrom('G')],
                          '4': ['fourthstring', sortStringNotesFrom('D')],
                          '5': ['fifthstring', sortStringNotesFrom('G')],
                          '6': ['sixthstring', sortStringNotesFrom('G')]}
          },
          {'nameOfTheTuning' : 'openG 2',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D')],
                          '2': ['secondstring', sortStringNotesFrom('B')],
                          '3': ['thirdstring', sortStringNotesFrom('G')],
                          '4': ['fourthstring', sortStringNotesFrom('D')],
                          '5': ['fifthstring', sortStringNotesFrom('B')],
                          '6': ['sixthstring', sortStringNotesFrom('G')]}
          },
          {'nameOfTheTuning' : 'openG 3',
          'tuningInfo': { '1': ['firststring', sortStringNotesFrom('D')],
                          '2': ['secondstring', sortStringNotesFrom('B')],
                          '3': ['thirdstring', sortStringNotesFrom('G')],
                          '4': ['fourthstring', sortStringNotesFrom('D')],
                          '5': ['fifthstring', sortStringNotesFrom('G')],
                          '6': ['sixthstring', sortStringNotesFrom('C')]}
          }
  ]
}

export const getTunings = (tuning) => {
  switch (tuning) {
    default:
    case 'standard':
      return standardTuning()
    case 'openA':
      return openATuning()[0]
    case 'openA 1':
      return openATuning()[1]
    case 'openA 2':
      return openATuning()[2]
    case 'slide openA':
      return openATuning()[3]
    case 'openB':
      return openBTuning()[0]
    case 'openB 1':
      return openBTuning()[1]
    case 'openC':
      return openCTuning()[0]
    case 'openC 1':
      return openCTuning()[1]
    case 'openC 2':
      return openCTuning()[2]
    case 'openD':
      return openDTuning()[0]
    case 'openD 1':
      return openDTuning()[1]
    case 'openE':
      return openETuning()
    case 'openF':
      return openFTuning()[0]
    case 'openF 1':
      return openFTuning()[1]
    case 'openG':
      return openGTuning()[0]
    case 'openG 1':
      return openGTuning()[1]
    case 'openG 2':
      return openGTuning()[2]
    case 'openG 3':
      return openGTuning()[3]
  }
}