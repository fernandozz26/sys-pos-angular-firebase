import { Injectable} from "@angular/core";
import { LoginService } from "../../shared/service/login.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, GuardResult, MaybeAsync } from "@angular/router";

@Injectable({
    providedIn: 'root',
  })
  
export class LoginGuard implements CanActivate{

    isAuthenticated!: boolean;
    constructor(private loginService: LoginService, private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        this.loginService.isAuthenticated$.subscribe(res => {this.isAuthenticated = res;})
        console.log(this.isAuthenticated)
        if(this.isAuthenticated){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }
}