import UIKit
import WebKit

class ViewController: UIViewController {

    var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()

        webView = WKWebView(frame: view.bounds)
        view.addSubview(webView)

        if let url = URL(string: "https://saltanat0606.github.io/MY-DIPLOMKA-SSN/") {
            webView.load(URLRequest(url: url))
        }
    }
}
