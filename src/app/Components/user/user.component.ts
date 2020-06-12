import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../Service/posts.service';
import { PostModel } from 'src/app/Models/post.model';
import { Router,ActivatedRoute  } from '@angular/router';
import { UsersService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  posts: PostModel[];
  userId:number;
  userName:string;
  constructor(private postsService: PostsService,private usersService: UsersService,private router:ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.userId = params['id']; // (+) converts string 'id' to a number
    });
    
    this.usersService.getUsers(this.userId).subscribe((getNamePost)=>{
      this.userName = getNamePost[0].name
    })
    this.postsService.getPost(this.userId).subscribe( posts =>{
      this.posts = posts;
    });
  }

}
