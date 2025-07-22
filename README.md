# JenkinsTest

A minimalist demo repository to practice **Jenkins CI/CD pipelines** with Python, pytest, and coverage.

---

## 🧪 Project Overview

* Contains a simple `Hello.py` script.
* Includes a test file `test_hello.py`.
* Designed to showcase:
  1. Jenkins pipeline setup
  2. Test execution with pytest
  3. Code coverage measurement and reporting
  4. Optional coverage gate enforcement (`--fail-under=80`)

---

## 🛠️ Prerequisites

* Jenkins (Docker-based or standalone) configured with:
  * Python 3 and virtual environment (`venv`)
  * pytest
  * coverage
* A GitHub webhook or polling configured to trigger builds
* (Optional) SonarQube integration for code quality analysis

---

## ⚙️ Pipeline Configuration

The **Jenkinsfile** includes the following stages:

1. **Checkout** – Clone the repository.
2. **Run Script** – Executes `Hello.py`.
3. **Install Dependencies** – Installs pytest and coverage in a Python venv.
4. **Test with Coverage** – Runs tests under coverage and fails if coverage < 80%.
5. **Generate HTML Report** – Creates HTML coverage output.
6. **Archive Report** – Saves coverage HTML as Jenkins build artifacts.

---

## 📁 Repository Structure

```
JenkinsTest/
├── Jenkinsfile
├── Hello.py
├── test_hello.py
├── requirements.txt
└── README.md
```

---

## 🚀 Getting Started

1. **Clone this repository** inside your Jenkins workspace or Docker container:

   ```bash
   git clone https://github.com/MNovy101/JenkinsTest.git
   cd JenkinsTest
   ```
2. **Ensure your Jenkins environment** has Python 3 and `venv` tools installed.
3. **(Re)Create the virtual environment** if not already present:

   ```bash
   python3 -m venv /opt/venv
   /opt/venv/bin/pip install --upgrade pip pytest coverage
   ```
4. **Run the Jenkins pipeline**, which will:

   * Execute the script
   * Run tests with coverage
   * Generate and archive an HTML report

---

## ✅ Testing Locally (Without Jenkins)

You can also run everything manually:

```bash
python3 Hello.py    # Should print "Hello, World!"
python3 -m pytest test_hello.py
coverage run -m pytest
coverage report --fail-under=80
coverage html
# The report will be in htmlcov/index.html
```

---

## 💬 Troubleshooting Tips

* **No tests found?** Ensure `test_hello.py` is named correctly and in the workspace.
* **Coverage warning or failure?** Check that your functions return values (`Hello.greet()`).
* **Coverage missing?** Use `coverage run -m pytest` instead of calling `pytest` directly.

---

## 🎯 Next Steps

* Add a **GitHub Action** to push to GitLab or mirror repos.
* Set up **EKS/VPC deployments** triggered post-approval stage.
* Add **Dockerfile** and containerize the application.

