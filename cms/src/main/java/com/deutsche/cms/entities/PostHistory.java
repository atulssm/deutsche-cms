package com.deutsche.cms.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "PostHistory")
public class PostHistory{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int postId;
    private String title;
    private String postContent;
    private String author;
    private LocalDateTime createdOn;
    private LocalDateTime modifiedOn;
    private String status;
}
