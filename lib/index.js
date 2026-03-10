const chalk = require("chalk");

console.log(
chalk.magenta(`
I LOVE ALLAH & MY MOM
BAILEYS MODIFIED BY 
`) + chalk.hex("#FFD700")("@Gabrielvierrrx")
);

console.log(chalk.magenta(`
 .S_SSSs     .S_SSSs     .S  S.        sSSs   .S S.     sSSs  
.SS~SSSSS   .SS~SSSSS   .SS  SS.      d%%SP  .SS SS.   d%%SP  
S%S   SSSS  S%S   SSSS  S%S  S%S     d%S'    S%S S%S  d%S'    
S%S    S%S  S%S    S%S  S%S  S%S     S%S     S%S S%S  S%|     
S%S SSSS%P  S%S SSSS%S  S&S  S&S     S&S     S%S S%S  S&S     
S&S  SSSY   S&S  SSS%S  S&S  S&S     S&S_Ss   SS SS   Y&Ss    
S&S    S&S  S&S    S&S  S&S  S&S     S&S~SP    S S    `S&&S   
S&S    S&S  S&S    S&S  S&S  S&S     S&S       SSS      `S*S  
S*S    S&S  S*S    S&S  S*S  S*b     S*b       S*S       l*S  
S*S    S*S  S*S    S*S  S*S  S*S.    S*S.      S*S      .S*P  
S*S SSSSP   S*S    S*S  S*S   SSSbs   SSSbs    S*S    sSS*S   
S*S  SSY    SSS    S*S  S*S    YSSP    YSSP    S*S    YSS'    
SP                 SP   SP                     SP             
Y                  Y    Y                      Y                                                                                                                                                               
`));

console.log(chalk.meganta(`     
██╗  ██╗ █████╗ ██╗   ██╗██╗███████╗██████╗ 
╚██╗██╔╝██╔══██╗██║   ██║██║██╔════╝██╔══██╗
 ╚███╔╝ ███████║██║   ██║██║█████╗  ██████╔╝
 ██╔██╗ ██╔══██║╚██╗ ██╔╝██║██╔══╝  ██╔══██╗
██╔╝ ██╗██║  ██║ ╚████╔╝ ██║███████╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝╚═╝  ╚═╝                                                                                                                                                                                                                   
`));

console.log(chalk.magenta("ThankYou Using My Baileys"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
var desc = Object.getOwnPropertyDescriptor(m, k);
if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
desc = { enumerable: true, get: function() { return m[k]; } };
}
Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

var __importDefault = (this && this.__importDefault) || function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
