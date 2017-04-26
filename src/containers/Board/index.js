import React, { Component } from 'react';
import './index.css';

import Note from '../../components/Note';

class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [['E', false], ['F', false]],
      notesDict: {'firstString': {'mi': false,
                                  'fa': false,
                                  'fasos': false,
                                  'sol': false,
                                  'solsos': false,
                                  'la': false,
                                  'lasos': false,
                                  'si': false,
                                  'do': false,
                                  'dosos': false,
                                  're': false,
                                  'resos': false
                                },
                  'secondString': {'mi': false,
                                   'fa': false,
                                   'fasos': false,
                                   'sol': false,
                                   'solsos': false,
                                   'la': false,
                                   'lasos': false,
                                   'si': false,
                                   'do': false,
                                   'dosos': false,
                                   're': false,
                                   'resos': false
                                  },
                  'thirdString': {'mi': false,
                                   'fa': false,
                                   'fasos': false,
                                   'sol': false,
                                   'solsos': false,
                                   'la': false,
                                   'lasos': false,
                                   'si': false,
                                   'do': false,
                                   'dosos': false,
                                   're': false,
                                   'resos': false
                                  },
                  'fourthString': {'mi': false,
                                   'fa': false,
                                   'fasos': false,
                                   'sol': false,
                                   'solsos': false,
                                   'la': false,
                                   'lasos': false,
                                   'si': false,
                                   'do': false,
                                   'dosos': false,
                                   're': false,
                                   'resos': false
                                  },
                  'fifthString': {'mi': false,
                                   'fa': false,
                                   'fasos': false,
                                   'sol': false,
                                   'solsos': false,
                                   'la': false,
                                   'lasos': false,
                                   'si': false,
                                   'do': false,
                                   'dosos': false,
                                   're': false,
                                   'resos': false
                                  },
                  'sixthString': {'mi': false,
                                   'fa': false,
                                   'fasos': false,
                                   'sol': false,
                                   'solsos': false,
                                   'la': false,
                                   'lasos': false,
                                   'si': false,
                                   'do': false,
                                   'dosos': false,
                                   're': false,
                                   'resos': false
                                  }
      }
    }

    this.removeNote = this.removeNote.bind(this);
    this.removeStringNotes = this.removeStringNotes.bind(this);

    this.setE = this.setE.bind(this);
    this.setF = this.setF.bind(this);
    this.setFsos = this.setFsos.bind(this);
    this.setG = this.setG.bind(this);
    this.setGsos = this.setGsos.bind(this);
    this.setA = this.setA.bind(this);
    this.setAsos = this.setAsos.bind(this);
    this.setB = this.setB.bind(this);
    this.setC = this.setC.bind(this);
    this.setCsos = this.setCsos.bind(this);
    this.setD = this.setD.bind(this);
    this.setDsos = this.setDsos.bind(this);

    this.drawEOnFirstString = this.drawEOnFirstString.bind(this);
    this.drawFOnFirstString = this.drawFOnFirstString.bind(this);
    this.drawFsosOnFirstString = this.drawFsosOnFirstString.bind(this);
    this.drawGOnFirstString = this.drawGOnFirstString.bind(this);
    this.drawGsosOnFirstString = this.drawGsosOnFirstString.bind(this);
    this.drawAOnFirstString = this.drawAOnFirstString.bind(this);
    this.drawAsosOnFirstString = this.drawAsosOnFirstString.bind(this);
    this.drawBOnFirstString = this.drawBOnFirstString.bind(this);
    this.drawCOnFirstString = this.drawCOnFirstString.bind(this);
    this.drawCsosOnFirstString = this.drawCsosOnFirstString.bind(this);
    this.drawDOnFirstString = this.drawDOnFirstString.bind(this);
    this.drawDsosOnFirstString = this.drawDsosOnFirstString.bind(this);

    this.drawEOnSecondString = this.drawEOnSecondString.bind(this);
    this.drawFOnSecondString = this.drawFOnSecondString.bind(this);
    this.drawFsosOnSecondString = this.drawFsosOnSecondString.bind(this);
    this.drawGOnSecondString = this.drawGOnSecondString.bind(this);
    this.drawGsosOnSecondString = this.drawGsosOnSecondString.bind(this);
    this.drawAOnSecondString = this.drawAOnSecondString.bind(this);
    this.drawAsosOnSecondString = this.drawAsosOnSecondString.bind(this);
    this.drawBOnSecondString = this.drawBOnSecondString.bind(this);
    this.drawCOnSecondString = this.drawCOnSecondString.bind(this);
    this.drawCsosOnSecondString = this.drawCsosOnSecondString.bind(this);
    this.drawDOnSecondString = this.drawDOnSecondString.bind(this);
    this.drawDsosOnSecondString = this.drawDsosOnSecondString.bind(this);

    this.drawEOnThirdString = this.drawEOnThirdString.bind(this);
    this.drawFOnThirdString = this.drawFOnThirdString.bind(this);
    this.drawFsosOnThirdString = this.drawFsosOnThirdString.bind(this);
    this.drawGOnThirdString = this.drawGOnThirdString.bind(this);
    this.drawGsosOnThirdString = this.drawGsosOnThirdString.bind(this);
    this.drawAOnThirdString = this.drawAOnThirdString.bind(this);
    this.drawAsosOnThirdString = this.drawAsosOnThirdString.bind(this);
    this.drawBOnThirdString = this.drawBOnThirdString.bind(this);
    this.drawCOnThirdString = this.drawCOnThirdString.bind(this);
    this.drawCsosOnThirdString = this.drawCsosOnThirdString.bind(this);
    this.drawDOnThirdString = this.drawDOnThirdString.bind(this);
    this.drawDsosOnThirdString = this.drawDsosOnThirdString.bind(this);

    this.drawEOnFourthString = this.drawEOnFourthString.bind(this);
    this.drawFOnFourthString = this.drawFOnFourthString.bind(this);
    this.drawFsosOnFourthString = this.drawFsosOnFourthString.bind(this);
    this.drawGOnFourthString = this.drawGOnFourthString.bind(this);
    this.drawGsosOnFourthString = this.drawGsosOnFourthString.bind(this);
    this.drawAOnFourthString = this.drawAOnFourthString.bind(this);
    this.drawAsosOnFourthString = this.drawAsosOnFourthString.bind(this);
    this.drawBOnFourthString = this.drawBOnFourthString.bind(this);
    this.drawCOnFourthString = this.drawCOnFourthString.bind(this);
    this.drawCsosOnFourthString = this.drawCsosOnFourthString.bind(this);
    this.drawDOnFourthString = this.drawDOnFourthString.bind(this);
    this.drawDsosOnFourthString = this.drawDsosOnFourthString.bind(this);

    this.drawEOnFifthString = this.drawEOnFifthString.bind(this);
    this.drawFOnFifthString = this.drawFOnFifthString.bind(this);
    this.drawFsosOnFifthString = this.drawFsosOnFifthString.bind(this);
    this.drawGOnFifthString = this.drawGOnFifthString.bind(this);
    this.drawGsosOnFifthString = this.drawGsosOnFifthString.bind(this);
    this.drawAOnFifthString = this.drawAOnFifthString.bind(this);
    this.drawAsosOnFifthString = this.drawAsosOnFifthString.bind(this);
    this.drawBOnFifthString = this.drawBOnFifthString.bind(this);
    this.drawCOnFifthString = this.drawCOnFifthString.bind(this);
    this.drawCsosOnFifthString = this.drawCsosOnFifthString.bind(this);
    this.drawDOnFifthString = this.drawDOnFifthString.bind(this);
    this.drawDsosOnFifthString = this.drawDsosOnFifthString.bind(this);

    this.drawEOnSixthString = this.drawEOnSixthString.bind(this);
    this.drawFOnSixthString = this.drawFOnSixthString.bind(this);
    this.drawFsosOnSixthString = this.drawFsosOnSixthString.bind(this);
    this.drawGOnSixthString = this.drawGOnSixthString.bind(this);
    this.drawGsosOnSixthString = this.drawGsosOnSixthString.bind(this);
    this.drawAOnSixthString = this.drawAOnSixthString.bind(this);
    this.drawAsosOnSixthString = this.drawAsosOnSixthString.bind(this);
    this.drawBOnSixthString = this.drawBOnSixthString.bind(this);
    this.drawCOnSixthString = this.drawCOnSixthString.bind(this);
    this.drawCsosOnSixthString = this.drawCsosOnSixthString.bind(this);
    this.drawDOnSixthString = this.drawDOnSixthString.bind(this);
    this.drawDsosOnSixthString = this.drawDsosOnSixthString.bind(this);
  }

  render() {
    return (
      <div className="Board">

        <table cellspacing="0" id="mastil">

          <tr>

            <td>Al aire</td>
            <td></td>
            <td></td>
            <td>3</td>
            <td></td>
            <td>5</td>
            <td></td>
            <td>7</td>
            <td></td>
            <td>9</td>
            <td></td>
            <td></td>

          </tr>

          <tr>

            <td className="prima aire E t0" onDoubleClick={() => this.setE()}>
              <Note draw={this.drawEOnFirstString}></Note>
            </td>
            <td className="prima traste F t1" onDoubleClick={() => this.setF()}>
              <Note draw={this.drawFOnFirstString}></Note>
            </td>
            <td className="prima traste F# t2" onDoubleClick={() => this.setFsos()}>
              <Note draw={this.drawFsosOnFirstString}></Note>
            </td>
            <td className="prima traste G t3" onDoubleClick={() => this.setG()}>
              <Note draw={this.drawGOnFirstString}></Note>
            </td>
            <td className="prima traste G# t4" onDoubleClick={() => this.setGsos()}>
              <Note draw={this.drawGsosOnFirstString}></Note>
            </td>
            <td className="prima traste A t5" onDoubleClick={() => this.setA()}>
              <Note draw={this.drawAOnFirstString}></Note>
            </td>
            <td className="prima traste A# t6" onDoubleClick={() => this.setAsos()}>
              <Note draw={this.drawAsosOnFirstString}></Note>
            </td>
            <td className="prima traste B t7" onDoubleClick={() => this.setB()}>
              <Note draw={this.drawBOnFirstString}></Note>
            </td>
            <td className="prima traste C t8" onDoubleClick={() => this.setC()}>
              <Note draw={this.drawCOnFirstString}></Note>
            </td>
            <td className="prima traste C# t9" onDoubleClick={() => this.setCsos()}>
              <Note draw={this.drawCsosOnFirstString}></Note>
            </td>
            <td className="prima traste D t10" onDoubleClick={() => this.setD()}>
              <Note draw={this.drawDOnFirstString}></Note>
            </td>
            <td className="prima traste D# t11" onDoubleClick={() => this.setDsos()}>
              <Note draw={this.drawDsosOnFirstString}></Note>
            </td>

            <td className="smugColorToLeft">
              <img src="flechaleft.svg" cord="prima" onClick={this.dameCord} alt="click to smug notes"/>
            </td>

            <td className="smugColorToRight">
              <img src="flecharight.svg" cord="prima" onclick="init.smugColorToRight(this)" alt="click to smug notes"/>
            </td>

            <td className="removecord">
              <img src="closeIcon.svg" data="firstString" onClick={this.removeStringNotes} alt="remove notes"/>
            </td>

          </tr>

          <tr>

            <td className="segunda aire B t0" onDoubleClick={() => this.setB()}>
              <Note draw={this.drawBOnSecondString}></Note>
            </td>
            <td className="segunda traste C t1" onDoubleClick={() => this.setC()}>
              <Note draw={this.drawCOnSecondString}></Note>
            </td>
            <td className="segunda traste C# t2" onDoubleClick={() => this.setCsos()}>
              <Note draw={this.drawCsosOnSecondString}></Note>
            </td>
            <td className="segunda traste D t3" onDoubleClick={() => this.setD()}>
              <Note draw={this.drawDOnSecondString}></Note>
            </td>
            <td className="segunda traste D# t4" onDoubleClick={() => this.setDsos()}>
              <Note draw={this.drawDsosOnSecondString}></Note>
            </td>
            <td className="segunda traste E t5" onDoubleClick={() => this.setE()}>
              <Note draw={this.drawEOnSecondString}></Note>
            </td>
            <td className="segunda traste F t6" onDoubleClick={() => this.setF()}>
              <Note draw={this.drawFOnSecondString}></Note>
            </td>
            <td className="segunda traste F# t7" onDoubleClick={() => this.setFsos()}>
              <Note draw={this.drawFsosOnSecondString}></Note>
            </td>
            <td className="segunda traste G t8" onDoubleClick={() => this.setG()}>
              <Note draw={this.drawGOnSecondString}></Note>
            </td>
            <td className="segunda traste G# t9" onDoubleClick={() => this.setGsos()}>
              <Note draw={this.drawGsosOnSecondString}></Note>
            </td>
            <td className="segunda traste A t10" onDoubleClick={() => this.setA()}>
              <Note draw={this.drawAOnSecondString}></Note>
            </td>
            <td className="segunda traste A# t11" onDoubleClick={() => this.setAsos()}>
              <Note draw={this.drawAsosOnSecondString}></Note>
            </td>

            <td className="smugColorToLeft">
              <img src="flechaleft.svg" cord="segunda" onclick="init.smugColorToLeft(this)" alt="click to smug notes"/>
            </td>

            <td className="smugColorToRight">
              <img src="flecharight.svg" cord="segunda" onclick="init.smugColorToRight(this)" alt="click to smug notes"/>
            </td>

            <td className="removecord">
              <img src="closeIcon.svg" data="secondString" onClick={this.removeStringNotes} alt="remove notes"/>
            </td>

          </tr>

          <tr>

            <td className="tercera aire G t0" onDoubleClick={() => this.setG()}>
              <Note draw={this.drawGOnThirdString}></Note>
            </td>
            <td className="tercera traste G# t1" onDoubleClick={() => this.setGsos()}>
              <Note draw={this.drawGsosOnThirdString}></Note>
            </td>
            <td className="tercera traste A t2" onDoubleClick={() => this.setA()}>
              <Note draw={this.drawAOnThirdString}></Note>
            </td>
            <td className="tercera traste A# t3" onDoubleClick={() => this.setAsos()}>
              <Note draw={this.drawAsosOnThirdString}></Note>
            </td>
            <td className="tercera traste B t4" onDoubleClick={() => this.setB()}>
              <Note draw={this.drawBOnThirdString}></Note>
            </td>
            <td className="tercera traste C t5" onDoubleClick={() => this.setC()}>
              <Note draw={this.drawCOnThirdString}></Note>
            </td>
            <td className="tercera traste C# t6" onDoubleClick={() => this.setCsos()}>
              <Note draw={this.drawCsosOnThirdString}></Note>
            </td>
            <td className="tercera traste D t7" onDoubleClick={() => this.setD()}>
              <Note draw={this.drawDOnThirdString}></Note>
            </td>
            <td className="tercera traste D# t8" onDoubleClick={() => this.setDsos()}>
              <Note draw={this.drawDsosOnThirdString}></Note>
            </td>
            <td className="tercera traste E t9" onDoubleClick={() => this.setE()}>
              <Note draw={this.drawEOnThirdString}></Note>
            </td>
            <td className="tercera traste F t10" onDoubleClick={() => this.setF()}>
              <Note draw={this.drawFOnThirdString}></Note>
            </td>
            <td className="tercera traste F# t11" onDoubleClick={() => this.setFsos()}>
              <Note draw={this.drawFsosOnThirdString}></Note>
            </td>

            <td className="smugColorToLeft">
              <img src="flechaleft.svg" cord="tercera" onclick="init.smugColorToLeft(this)" alt="click to smug notes"/>
            </td>

            <td className="smugColorToRight">
              <img src="flecharight.svg" cord="tercera" onclick="init.smugColorToRight(this)" alt="click to smug notes"/>
            </td>

            <td className="removecord">
              <img src="closeIcon.svg" data="thirdString" onClick={this.removeStringNotes} alt="remove notes"/>
            </td>

          </tr>

          <tr>

            <td className="cuarta aire D t0" onDoubleClick={() => this.setD()}>
              <Note draw={this.drawDOnFourthString}></Note>
            </td>
            <td className="cuarta traste D# t1" onDoubleClick={() => this.setDsos()}>
              <Note draw={this.drawDsosOnFourthString}></Note>
            </td>
            <td className="cuarta traste E t2" onDoubleClick={() => this.setE()}>
              <Note draw={this.drawEOnFourthString}></Note>
            </td>
            <td className="cuarta traste F t3" onDoubleClick={() => this.setF()}>
              <Note draw={this.drawFOnFourthString}></Note>
            </td>
            <td className="cuarta traste F# t4" onDoubleClick={() => this.setFsos()}>
              <Note draw={this.drawFsosOnFourthString}></Note>
            </td>
            <td className="cuarta traste G t5" onDoubleClick={() => this.setG()}>
              <Note draw={this.drawGOnFourthString}></Note>
            </td>
            <td className="cuarta traste G# t6" onDoubleClick={() => this.setGsos()}>
              <Note draw={this.drawGsosOnFourthString}></Note>
            </td>
            <td className="cuarta traste A t7" onDoubleClick={() => this.setA()}>
              <Note draw={this.drawAOnFourthString}></Note>
            </td>
            <td className="cuarta traste A# t8" onDoubleClick={() => this.setAsos()}>
              <Note draw={this.drawAsosOnFourthString}></Note>
            </td>
            <td className="cuarta traste B t9" onDoubleClick={() => this.setB()}>
              <Note draw={this.drawBOnFourthString}></Note>
            </td>
            <td className="cuarta traste C t10" onDoubleClick={() => this.setC()}>
              <Note draw={this.drawCOnFourthString}></Note>
            </td>
            <td className="cuarta traste C# t11" onDoubleClick={() => this.setCsos()}>
              <Note draw={this.drawCsosOnFourthString}></Note>
            </td>

            <td className="smugColorToLeft">
              <img src="flechaleft.svg" cord="cuarta" onclick="init.smugColorToLeft(this)" alt="click to smug notes"/>
            </td>

            <td className="smugColorToRight">
              <img src="flecharight.svg" cord="cuarta" onclick="init.smugColorToRight(this)" alt="click to smug notes"/>
            </td>

            <td className="removecord">
              <img src="closeIcon.svg" data="fourthString" onClick={this.removeStringNotes} alt="remove notes"/>
            </td>

          </tr>

          <tr>

            <td className="quinta aire A t0" onDoubleClick={() => this.setA()}>
              <Note draw={this.drawAOnFifthString}></Note>
            </td>
            <td className="quinta traste A# t1" onDoubleClick={() => this.setAsos()}>
              <Note draw={this.drawAsosOnFifthString}></Note>
            </td>
            <td className="quinta traste B t2"  onDoubleClick={() => this.setB()}>
              <Note draw={this.drawBOnFifthString}></Note>
            </td>
            <td className="quinta traste C t3"  onDoubleClick={() => this.setC()}>
              <Note draw={this.drawCOnFifthString}></Note>
            </td>
            <td className="quinta traste C# t4" onDoubleClick={() => this.setCsos()}>
              <Note draw={this.drawCsosOnFifthString}></Note>
            </td>
            <td className="quinta traste D t5"  onDoubleClick={() => this.setD()}>
              <Note draw={this.drawDOnFifthString}></Note>
            </td>
            <td className="quinta traste D# t6" onDoubleClick={() => this.setDsos()}>
              <Note draw={this.drawDsosOnFifthString}></Note>
            </td>
            <td className="quinta traste E t7"  onDoubleClick={() => this.setE()}>
              <Note draw={this.drawEOnFifthString}></Note>
            </td>
            <td className="quinta traste F t8" onDoubleClick={() => this.setF()}>
              <Note draw={this.drawFOnFifthString}></Note>
            </td>
            <td className="quinta traste F# t9"  onDoubleClick={() => this.setFsos()}>
              <Note draw={this.drawFsosOnFifthString}></Note>
            </td>
            <td className="quinta traste G t10" onDoubleClick={() => this.setG()}>
              <Note draw={this.drawGOnFifthString}></Note>
            </td>
            <td className="quinta traste G# t11" onDoubleClick={() => this.setGsos()}>
              <Note draw={this.drawGsosOnFifthString}></Note>
            </td>

            <td className="smugColorToLeft">
              <img src="flechaleft.svg" cord="quinta" onclick="init.smugColorToLeft(this)" alt="click to smug notes"/>
            </td>

            <td className="smugColorToRight">
              <img src="flecharight.svg" cord="quinta" onclick="init.smugColorToRight(this)" alt="click to smug notes"/>
            </td>

            <td className="removecord">
              <img src="closeIcon.svg" data="fifthString" onClick={this.removeStringNotes} alt="remove notes"/>
            </td>

          </tr>

          <tr>

            <td className="sexta aire E t0" onDoubleClick={() => this.setE()}>
              <Note draw={this.drawEOnSixthString}></Note>
            </td>
            <td className="sexta traste F t1" onDoubleClick={() => this.setF()}>
              <Note draw={this.drawFOnSixthString}></Note>
            </td>
            <td className="sexta traste F# t2" onDoubleClick={() => this.setFsos()}>
              <Note draw={this.drawFsosOnSixthString}></Note>
            </td>
            <td className="sexta traste G t3" onDoubleClick={() => this.setG()}>
              <Note draw={this.drawGOnSixthString}></Note>
            </td>
            <td className="sexta traste G# t4" onDoubleClick={() => this.setGsos()}>
              <Note draw={this.drawGsosOnSixthString}></Note>
            </td>
            <td className="sexta traste A t5" onDoubleClick={() => this.setA()}>
              <Note draw={this.drawAOnSixthString}></Note>
            </td>
            <td className="sexta traste A# t6" onDoubleClick={() => this.setAsos()}>
              <Note draw={this.drawAsosOnSixthString}></Note>
            </td>
            <td className="sexta traste B t7" onDoubleClick={() => this.setB()}>
              <Note draw={this.drawBOnSixthString}></Note>
            </td>
            <td className="sexta traste C t8" onDoubleClick={() => this.setC()}>
              <Note draw={this.drawCOnSixthString}></Note>
            </td>
            <td className="sexta traste C# t9" onDoubleClick={() => this.setCsos()}>
              <Note draw={this.drawCsosOnSixthString}></Note>
            </td>
            <td className="sexta traste D t10" onDoubleClick={() => this.setD()}>
              <Note draw={this.drawDOnSixthString}></Note>
            </td>
            <td className="sexta traste D# t11" onDoubleClick={() => this.setDsos()}>
              <Note draw={this.drawDsosOnSixthString}></Note>
            </td>

            <td className="smugColorToLeft">
              <img src="flechaleft.svg" cord="sexta" onclick="init.smugColorToLeft(this)" alt="click to smug notes"/>
            </td>

            <td className="smugColorToRight">
              <img src="flecharight.svg" cord="sexta" onclick="init.smugColorToRight(this)" alt="click to smug notes"/>
            </td>

            <td className="removecord">
              <img src="closeIcon.svg" data="sixthString" onClick={this.removeStringNotes} alt="remove notes"/>
            </td>

          </tr>

        </table>

      </div>
    );
  }

  setE() {
    this.setState({...this.state, notesDict: {...this.state.notesDict,
                                    firstString: {...this.state.notesDict.firstString,
                                    mi: true},

                                    secondString: {...this.state.notesDict.secondString,
                                    mi: true},

                                    thirdString: {...this.state.notesDict.thirdString,
                                    mi: true},

                                    fourthString: {...this.state.notesDict.fourthString,
                                    mi: true},

                                    fifthString: {...this.state.notesDict.fifthString,
                                    mi: true},

                                    sixthString: {...this.state.notesDict.sixthString,
                                    mi: true}
                                    }
      });
  }

  setF() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      fa: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      fa: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      fa: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      fa: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      fa: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      fa: true}
                                    }
      });
  }

  setFsos() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      fasos: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      fasos: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      fasos: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      fasos: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      fasos: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      fasos: true}
                                    }
      });
  }

  setG() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      sol: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      sol: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      sol: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      sol: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      sol: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      sol: true}
                                    }
      });
  }

  setGsos() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      solsos: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      solsos: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      solsos: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      solsos: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      solsos: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      solsos: true}
                                    }
      });
  }

  setA() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      la: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      la: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      la: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      la: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      la: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      la: true}
                                    }
      });
  }

  setAsos() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      lasos: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      lasos: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      lasos: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      lasos: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      lasos: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      lasos: true}
                                    }
      });
  }

  setB() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      si: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      si: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      si: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      si: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      si: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      si: true}
                                    }
      });
  }

  setC() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      do: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      do: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      do: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      do: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      do: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      do: true}
                                    }
      });
  }

  setCsos() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      dosos: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      dosos: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      dosos: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      dosos: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      dosos: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      dosos: true}
                                    }
      });
  }

  setD() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      re: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      re: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      re: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      re: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      re: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      re: true}
                                    }
      });
  }

  setDsos() {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {...this.state.notesDict.firstString,
                                      resos: true},

                                      secondString: {...this.state.notesDict.secondString,
                                      resos: true},

                                      thirdString: {...this.state.notesDict.thirdString,
                                      resos: true},

                                      fourthString: {...this.state.notesDict.fourthString,
                                      resos: true},

                                      fifthString: {...this.state.notesDict.fifthString,
                                      resos: true},

                                      sixthString: {...this.state.notesDict.sixthString,
                                      resos: true}
                                    }
      });
  }


  drawEOnFirstString() {
    if (this.state.notesDict.firstString.mi === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>E</button>
      )
    }
  }

  drawFOnFirstString() {
    if (this.state.notesDict.firstString.fa === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>F</button>
      )
    }
  }

  drawFsosOnFirstString() {
    if (this.state.notesDict.firstString.fasos === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>F#</button>
      )
    }
  }

  drawGOnFirstString() {
    if (this.state.notesDict.firstString.sol === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>G</button>
      )
    }
  }

  drawGsosOnFirstString() {
    if (this.state.notesDict.firstString.solsos === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>G#</button>
      )
    }
  }

  drawAOnFirstString() {
    if (this.state.notesDict.firstString.la === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>A</button>
      )
    }
  }

  drawAsosOnFirstString() {
    if (this.state.notesDict.firstString.lasos === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>A#</button>
      )
    }
  }

  drawBOnFirstString() {
    if (this.state.notesDict.firstString.si === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>B</button>
      )
    }
  }

  drawCOnFirstString() {
    if (this.state.notesDict.firstString.do === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>C</button>
      )
    }
  }

  drawCsosOnFirstString() {
    if (this.state.notesDict.firstString.dosos === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>C#</button>
      )
    }
  }

  drawDOnFirstString() {
    if (this.state.notesDict.firstString.re === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>D</button>
      )
    }
  }

  drawDsosOnFirstString() {
    if (this.state.notesDict.firstString.resos === true) {
      return (
        <button value="firstString" onClick={this.removeNote}>D#</button>
      )
    }
  }

  drawEOnSecondString() {
    if (this.state.notesDict.secondString.mi === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>E</button>
      )
    }
  }

  drawFOnSecondString() {
    if (this.state.notesDict.secondString.fa === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>F</button>
      )
    }
  }

  drawFsosOnSecondString() {
    if (this.state.notesDict.secondString.fasos === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>F#</button>
      )
    }
  }

  drawGOnSecondString() {
    if (this.state.notesDict.secondString.sol === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>G</button>
      )
    }
  }

  drawGsosOnSecondString() {
    if (this.state.notesDict.secondString.solsos === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>G#</button>
      )
    }
  }

  drawAOnSecondString() {
    if (this.state.notesDict.secondString.la === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>A</button>
      )
    }
  }

  drawAsosOnSecondString() {
    if (this.state.notesDict.secondString.lasos === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>A#</button>
      )
    }
  }

  drawBOnSecondString() {
    if (this.state.notesDict.secondString.si === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>B</button>
      )
    }
  }

  drawCOnSecondString() {
    if (this.state.notesDict.secondString.do === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>C</button>
      )
    }
  }

  drawCsosOnSecondString() {
    if (this.state.notesDict.secondString.dosos === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>C#</button>
      )
    }
  }

  drawDOnSecondString() {
    if (this.state.notesDict.secondString.re === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>D</button>
      )
    }
  }

  drawDsosOnSecondString() {
    if (this.state.notesDict.secondString.resos === true) {
      return (
        <button value="secondString" onClick={this.removeNote}>D#</button>
      )
    }
  }

  drawEOnThirdString() {
    if (this.state.notesDict.thirdString.mi === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>E</button>
      )
    }
  }

  drawFOnThirdString() {
    if (this.state.notesDict.thirdString.fa === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>F</button>
      )
    }
  }

  drawFsosOnThirdString() {
    if (this.state.notesDict.thirdString.fasos === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>F#</button>
      )
    }
  }

  drawGOnThirdString() {
    if (this.state.notesDict.thirdString.sol === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>G</button>
      )
    }
  }

  drawGsosOnThirdString() {
    if (this.state.notesDict.thirdString.solsos === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>G#</button>
      )
    }
  }

  drawAOnThirdString() {
    if (this.state.notesDict.thirdString.la === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>A</button>
      )
    }
  }

  drawAsosOnThirdString() {
    if (this.state.notesDict.thirdString.lasos === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>A#</button>
      )
    }
  }

  drawBOnThirdString() {
    if (this.state.notesDict.thirdString.si === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>B</button>
      )
    }
  }

  drawCOnThirdString() {
    if (this.state.notesDict.thirdString.do === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>C</button>
      )
    }
  }

  drawCsosOnThirdString() {
    if (this.state.notesDict.thirdString.dosos === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>C#</button>
      )
    }
  }

  drawDOnThirdString() {
    if (this.state.notesDict.thirdString.re === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>D</button>
      )
    }
  }

  drawDsosOnThirdString() {
    if (this.state.notesDict.thirdString.resos === true) {
      return (
        <button value="thirdString" onClick={this.removeNote}>D#</button>
      )
    }
  }

  drawEOnFourthString() {
    if (this.state.notesDict.fourthString.mi === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>E</button>
      )
    }
  }

  drawFOnFourthString() {
    if (this.state.notesDict.fourthString.fa === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>F</button>
      )
    }
  }

  drawFsosOnFourthString() {
    if (this.state.notesDict.fourthString.fasos === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>F#</button>
      )
    }
  }

  drawGOnFourthString() {
    if (this.state.notesDict.fourthString.sol === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>G</button>
      )
    }
  }

  drawGsosOnFourthString() {
    if (this.state.notesDict.fourthString.solsos === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>G#</button>
      )
    }
  }

  drawAOnFourthString() {
    if (this.state.notesDict.fourthString.la === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>A</button>
      )
    }
  }

  drawAsosOnFourthString() {
    if (this.state.notesDict.fourthString.lasos === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>A#</button>
      )
    }
  }

  drawBOnFourthString() {
    if (this.state.notesDict.fourthString.si === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>B</button>
      )
    }
  }

  drawCOnFourthString() {
    if (this.state.notesDict.fourthString.do === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>C</button>
      )
    }
  }

  drawCsosOnFourthString() {
    if (this.state.notesDict.fourthString.dosos === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>C#</button>
      )
    }
  }

  drawDOnFourthString() {
    if (this.state.notesDict.fourthString.re === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>D</button>
      )
    }
  }

  drawDsosOnFourthString() {
    if (this.state.notesDict.fourthString.resos === true) {
      return (
        <button value="fourthString" onClick={this.removeNote}>D#</button>
      )
    }
  }

  drawEOnFifthString() {
    if (this.state.notesDict.fifthString.mi === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>E</button>
      )
    }
  }

  drawFOnFifthString() {
    if (this.state.notesDict.fifthString.fa === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>F</button>
      )
    }
  }

  drawFsosOnFifthString() {
    if (this.state.notesDict.fifthString.fasos === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>F#</button>
      )
    }
  }

  drawGOnFifthString() {
    if (this.state.notesDict.fifthString.sol === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>G</button>
      )
    }
  }

  drawGsosOnFifthString() {
    if (this.state.notesDict.fifthString.solsos === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>G#</button>
      )
    }
  }

  drawAOnFifthString() {
    if (this.state.notesDict.fifthString.la === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>A</button>
      )
    }
  }

  drawAsosOnFifthString() {
    if (this.state.notesDict.fifthString.lasos === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>A#</button>
      )
    }
  }

  drawBOnFifthString() {
    if (this.state.notesDict.fifthString.si === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>B</button>
      )
    }
  }

  drawCOnFifthString() {
    if (this.state.notesDict.fifthString.do === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>C</button>
      )
    }
  }

  drawCsosOnFifthString() {
    if (this.state.notesDict.fifthString.dosos === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>C#</button>
      )
    }
  }

  drawDOnFifthString() {
    if (this.state.notesDict.fifthString.re === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>D</button>
      )
    }
  }

  drawDsosOnFifthString() {
    if (this.state.notesDict.fifthString.resos === true) {
      return (
        <button value="fifthString" onClick={this.removeNote}>D#</button>
      )
    }
  }

  drawEOnSixthString() {
    if (this.state.notesDict.sixthString.mi === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>E</button>
      )
    }
  }

  drawFOnSixthString() {
    if (this.state.notesDict.sixthString.fa === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>F</button>
      )
    }
  }

  drawFsosOnSixthString() {
    if (this.state.notesDict.sixthString.fasos === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>F#</button>
      )
    }
  }

  drawGOnSixthString() {
    if (this.state.notesDict.sixthString.sol === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>G</button>
      )
    }
  }

  drawGsosOnSixthString() {
    if (this.state.notesDict.sixthString.solsos === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>G#</button>
      )
    }
  }

  drawAOnSixthString() {
    if (this.state.notesDict.sixthString.la === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>A</button>
      )
    }
  }

  drawAsosOnSixthString() {
    if (this.state.notesDict.sixthString.lasos === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>A#</button>
      )
    }
  }

  drawBOnSixthString() {
    if (this.state.notesDict.sixthString.si === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>B</button>
      )
    }
  }

  drawCOnSixthString() {
    if (this.state.notesDict.sixthString.do === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>C</button>
      )
    }
  }

  drawCsosOnSixthString() {
    if (this.state.notesDict.sixthString.dosos === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>C#</button>
      )
    }
  }

  drawDOnSixthString() {
    if (this.state.notesDict.sixthString.re === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>D</button>
      )
    }
  }

  drawDsosOnSixthString() {
    if (this.state.notesDict.sixthString.resos === true) {
      return (
        <button value="sixthString" onClick={this.removeNote}>D#</button>
      )
    }
  }

  removeNote(e) {
    if (e.target.value === 'firstString') {
      if (e.target.innerHTML === 'E') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        mi : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        fa : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        fasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        sol : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        solsos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        la : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        lasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'B') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        si : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        do : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        dosos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        re : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        firstString: {...this.state.notesDict.firstString,
                                        resos : false},
                                      }
        });
      }
    }
    if (e.target.value === 'secondString') {
      if (e.target.innerHTML === 'E') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        mi : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        fa : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        fasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        sol : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        solsos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        la : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        lasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'B') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        si : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        do : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        dosos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        re : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        secondString: {...this.state.notesDict.secondString,
                                        resos : false},
                                      }
        });
      }
    }
    if (e.target.value === 'thirdString') {
      if (e.target.innerHTML === 'E') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        mi : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        fa : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        fasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        sol : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        solsos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        la : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        lasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'B') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        si : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        do : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        dosos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        re : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        thirdString: {...this.state.notesDict.thirdString,
                                        resos : false},
                                      }
        });
      }
    }
    if (e.target.value === 'fourthString') {
      if (e.target.innerHTML === 'E') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        mi : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        fa : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        fasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        sol : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        solsos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        la : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        lasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'B') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        si : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        do : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        dosos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        re : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fourthString: {...this.state.notesDict.fourthString,
                                        resos : false},
                                      }
        });
      }
    }
    if (e.target.value === 'fifthString') {
      if (e.target.innerHTML === 'E') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        mi : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        fa : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        fasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        sol : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        solsos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        la : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        lasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'B') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        si : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        do : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        dosos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        re : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        fifthString: {...this.state.notesDict.fifthString,
                                        resos : false},
                                      }
        });
      }
    }
    if (e.target.value === 'sixthString') {
      if (e.target.innerHTML === 'E') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        mi : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        fa : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'F#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        fasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        sol : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'G#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        solsos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        la : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'A#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        lasos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'B') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        si : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        do : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'C#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        dosos : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        re : false},
                                      }
        });
      }
      if (e.target.innerHTML === 'D#') {
        this.setState({...this.state, notesDict: {...this.state.notesDict,
                                        sixthString: {...this.state.notesDict.sixthString,
                                        resos : false},
                                      }
        });
      }
    }
  }

  removeStringNotes(e) {
    if (e.target.getAttribute('data') === 'firstString') {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      firstString: {
                                      do: false,
                                      dosos: false,
                                      re: false,
                                      resos: false,
                                      mi: false,
                                      fa: false,
                                      fasos: false,
                                      sol: false,
                                      solsos: false,
                                      la: false,
                                      lasos: false,
                                      si: false}
                                    }
      });
    }
    if (e.target.getAttribute('data') === 'secondString') {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      secondString: {
                                      do: false,
                                      dosos: false,
                                      re: false,
                                      resos: false,
                                      mi: false,
                                      fa: false,
                                      fasos: false,
                                      sol: false,
                                      solsos: false,
                                      la: false,
                                      lasos: false,
                                      si: false}
                                    }
      });
    }
    if (e.target.getAttribute('data') === 'thirdString') {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      thirdString: {
                                      do: false,
                                      dosos: false,
                                      re: false,
                                      resos: false,
                                      mi: false,
                                      fa: false,
                                      fasos: false,
                                      sol: false,
                                      solsos: false,
                                      la: false,
                                      lasos: false,
                                      si: false}
                                    }
      });
    }
    if (e.target.getAttribute('data') === 'thirdString') {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      thirdString: {
                                      do: false,
                                      dosos: false,
                                      re: false,
                                      resos: false,
                                      mi: false,
                                      fa: false,
                                      fasos: false,
                                      sol: false,
                                      solsos: false,
                                      la: false,
                                      lasos: false,
                                      si: false}
                                    }
      });
    }
    if (e.target.getAttribute('data') === 'fourthString') {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      fourthString: {
                                      do: false,
                                      dosos: false,
                                      re: false,
                                      resos: false,
                                      mi: false,
                                      fa: false,
                                      fasos: false,
                                      sol: false,
                                      solsos: false,
                                      la: false,
                                      lasos: false,
                                      si: false}
                                    }
      });
    }
    if (e.target.getAttribute('data') === 'fifthString') {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      fifthString: {
                                      do: false,
                                      dosos: false,
                                      re: false,
                                      resos: false,
                                      mi: false,
                                      fa: false,
                                      fasos: false,
                                      sol: false,
                                      solsos: false,
                                      la: false,
                                      lasos: false,
                                      si: false}
                                    }
      });
    }
    if (e.target.getAttribute('data') === 'sixthString') {
      this.setState({...this.state, notesDict: {...this.state.notesDict,
                                      sixthString: {
                                      do: false,
                                      dosos: false,
                                      re: false,
                                      resos: false,
                                      mi: false,
                                      fa: false,
                                      fasos: false,
                                      sol: false,
                                      solsos: false,
                                      la: false,
                                      lasos: false,
                                      si: false}
                                    }
      });
    }
  }

  dameCord(e) {
    console.log(e.target.cord);
  }
}

export default Board;
