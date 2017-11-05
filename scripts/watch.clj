(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'my-project.core
   :output-to "out/my_project.js"
   :output-dir "out"})
