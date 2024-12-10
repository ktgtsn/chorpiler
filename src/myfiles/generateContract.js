import * as fs from "fs";
import chorpiler, { ProcessEncoding } from "./src/index.js";

const parser = new chorpiler.Parser();

const contractGenerator =
  new chorpiler.generators.sol.DefaultContractGenerator();

const bpmnXML = fs.readFileSync("yourBPMNXML.bpmn"); // Replace with your BPMN file name

// Parse BPMN file into petri net
parser
  .fromXML(bpmnXML)
  .then((iNet) => {
    // Compile to smart contract
    return contractGenerator.compile(iNet);
  })
  .then((gen) => {
    fs.writeFileSync("Process.sol", gen.target, { flag: "w+" });
    console.log("Process.sol generated.");
    console.log(ProcessEncoding.toJSON(gen.encoding));
  })
  .catch((err) => console.error(err));
//changes
