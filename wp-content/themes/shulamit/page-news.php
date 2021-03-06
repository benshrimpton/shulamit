<?php get_header(); ?>
<section class="container">
  <header class="row press-heading">
    <div class="col-sm-12">
      <h4 class="heavy">News</h4>
    </div>
  </header>
    
  
  <?php $loop = new WP_Query( array( 'post_type' => 'post' ,  'posts_per_page'=>'100' , 'category__and'=>'5, 7' ) ); ?>
  <?php while ( $loop->have_posts() ) : $loop->the_post(); $feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>
  
  
   <section class="row post"> 
    <figure class="col-sm-5">
        <a href="<? the_field('press_url'); ?>" target="_blank">
          <?php
              if ( has_post_thumbnail() ){
                the_post_thumbnail('medium', array('class' => 'img-responsive'));
              }
              else{
                $theUrl = get_field('image_link');
                echo  '<img src="'.$theUrl.'" class="img-responsive"/>';
              }
          ?>
        </a> 
    </figure>
      <section class="col-sm-7">
        <header class="post-header no-date">
<!--          <span class="bold slug">Past Exhibition</span> -->
         <h2 class="heavy"> <a href="<? the_field('press_url'); ?>" target="_blank"><? the_title();?></a></h2>
        </header>
        <section class="content">
        <? the_excerpt();?>
        <a href="<? the_field('press_url'); ?>" target="_blank" class="read-more">Read The Article</a>
        </section>
    </section>
  </section>

<?php endwhile; wp_reset_query(); ?>

      
 </section><!-- end row -->
 
 
  
 
<?php get_footer(); ?>



