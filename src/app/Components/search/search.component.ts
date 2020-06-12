import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../Service/users.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputUserText:string ;
  users: UserModel[];

  constructor(private usersService: UsersService,private router:Router) { }

  ngOnInit(): void {
    
  }
  checkUser(){
    if(this.inputUserText){
      this.usersService.getUser(this.inputUserText).subscribe((res)=>{
        var arr:any = []
        arr = res;
        if(arr.length > 0){
          this.router.navigate(["posts/"+res[0].id])
        }
        else{
          swal.fire({
            title: 'Information',
            text: 'User Not Found!!!!',
            confirmButtonText: 'OK',
          })
        }
      })
    }
    else{
      swal.fire({
        title: 'Information',
        text: 'Please Add Some Text!!!',
        confirmButtonText: 'OK',
      })
    }
    
  }
  
}

// swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You will not be able to recover this imaginary file!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, keep it'
    // }).then((result) => {
    //   if (result.value) {
    //     swal.fire(
    //       'Deleted!',
    //       'Your imaginary file has been deleted.',
    //       'success'
    //     )
    //   // For more information about handling dismissals please visit
    //   // https://sweetalert2.github.io/#handling-dismissals
    //   } else if (result.dismiss === swal.DismissReason.cancel) {
    //     swal.fire(
    //       'Cancelled',
    //       'Your imaginary file is safe :)',
    //       'error'
    //     )
    //   }
    // })
