from flask import request, Response, jsonify
from flask import current_app as app
import re

# from backend.app.database import crud
# from backend.app.database.database import get_db_conn

from backend.app.services import chemspipy

# @app.route("/")
# def main():
#     return render_template("home.html")


# @app.route("/about")
# def about():
#     return render_template("about.html")


@app.route("/api/search_compound/<compound>", methods=['GET'])
def search_compound(compound):
    if request.method == 'GET':
        results = chemspipy.search_compound_name(compound)
        return jsonify([results])
