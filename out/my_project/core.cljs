(ns my-project.core
  (:use-macros [dogfort.middleware.routes-macros :only [defroutes GET POST ANY]])
  (:use [dogfort.http :only [run-http]]
        )
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [cljs.nodejs]
            hiccups.runtime
            [dogfort.middleware.defaults :as defaults]
            [dogfort.middleware.routes]))

(cljs.nodejs/enable-util-print!)

(defroutes handler
  (ANY "/" req
       {:status 200
        :body (pr-str req)
        :session {:hi "there"}})
  (GET "/hello/:name" [name]
  ["<h1>Hello " name "!</h1>"])
)

(defn main [& args]
  (println "starting")
  (-> handler
      (defaults/wrap-defaults {:wrap-file "static"})
      (run-http {:port (or (.-PORT (.-env js/process)) 5001)})))

(set! *main-cli-fn* main)
