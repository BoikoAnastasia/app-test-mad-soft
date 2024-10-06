import { Error } from "../pages/Error";
import { Finish } from "../pages/Finish";
import { Start } from "../pages/Start";
import { Testing } from "../pages/Testing";

export const routers = [
    {path: '/', Element: Start},
    {path: '/test', Element: Testing},
    {path: '/error', Element: Error},
    {path: '/finish', Element: Finish},
    {path: '*', Element: Error},
]