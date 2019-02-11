extern crate warp;

use warp::Filter;

fn main() {
  let route = warp::path("ids")
    .map(|| {
      let our_ids = vec![1, 3, 7, 13];
      warp::reply::json(&our_ids)
    });

  warp::serve(route)
    .run(([127, 0, 0, 1], 8080));
}