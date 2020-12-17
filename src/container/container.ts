import { Container } from "inversify";
import { Util, UtilImpl } from "../helpers";
const container = new Container();
container.bind<Util>('util').to(UtilImpl);
export default container ;